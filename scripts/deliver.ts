import fs from "fs";
import path from "path";

import { banner, success, error } from "./lib/logger";
import { loadCatalog } from "./lib/loaders/catalog-loader";
import { validateCatalog } from "./lib/validation/validation-engine";
import { Source } from "./models/source";
import { ConnectorDefinition } from "./models/connector";
import { Company } from "./models/company";

banner("Atlas Delivery — Workspace → Catalog");

const workspaceRoot = path.join(process.cwd(), "0_workspace");
const catalogRoot = path.join(process.cwd(), "catalog");

function loadWorkspaceJson<T>(folder: string): Record<string, T> {
  const dirPath = path.join(workspaceRoot, folder);
  const result: Record<string, T> = {};
  if (!fs.existsSync(dirPath)) return result;

  for (const file of fs.readdirSync(dirPath)) {
    if (!file.endsWith(".json") || file.endsWith(".provenance.json") || file.startsWith("_")) continue;
    const id = file.replace(".json", "");
    result[id] = JSON.parse(fs.readFileSync(path.join(dirPath, file), "utf8"));
  }
  return result;
}

console.log("Chargement des fiches en attente dans 0_workspace...");
console.log();

const pendingSources = loadWorkspaceJson<Source>("sources");
const pendingConnectors = loadWorkspaceJson<ConnectorDefinition>("connectors");
const pendingCompanies = loadWorkspaceJson<Company>("companies");

const pendingSourceIds = Object.keys(pendingSources);
const pendingConnectorIds = Object.keys(pendingConnectors);
const pendingCompanyIds = Object.keys(pendingCompanies);

if (pendingSourceIds.length === 0 && pendingConnectorIds.length === 0 && pendingCompanyIds.length === 0) {
  success("Rien à livrer — 0_workspace est vide.");
  process.exit(0);
}

success(`${pendingSourceIds.length} source(s), ${pendingConnectorIds.length} connecteur(s), ${pendingCompanyIds.length} entreprise(s) en attente`);
console.log();

console.log("Chargement du catalogue existant...");
const catalog = loadCatalog();

const mergedCatalog = {
  ...catalog,
  sources: { ...catalog.sources, ...pendingSources },
  connectors: { ...catalog.connectors, ...pendingConnectors },
  companies: { ...catalog.companies, ...pendingCompanies }
};

console.log("Validation des fiches en attente...");
console.log();

const validation = validateCatalog(mergedCatalog);

const relevantIssues = validation.issues.filter((issue) =>
  (issue.entity === "source" && issue.entityId && pendingSourceIds.includes(issue.entityId)) ||
  (issue.entity === "connector" && issue.entityId && pendingConnectorIds.includes(issue.entityId)) ||
  (issue.entity === "company" && issue.entityId && pendingCompanyIds.includes(issue.entityId))
);

if (relevantIssues.length > 0) {
  for (const issue of relevantIssues) {
    error(`[${issue.level}] ${issue.entity}/${issue.entityId}${issue.fieldId ? ` (${issue.fieldId})` : ""} — ${issue.message}`);
  }
  console.log();
  error(`${relevantIssues.length} issue(s) — aucune livraison effectuée.`);
  process.exit(1);
}

success("0 issue — livraison en cours...");
console.log();

function deliverEntity(folder: string, id: string, extraSuffixes: string[] = []): void {
  fs.copyFileSync(
    path.join(workspaceRoot, folder, `${id}.json`),
    path.join(catalogRoot, folder, `${id}.json`)
  );
  fs.unlinkSync(path.join(workspaceRoot, folder, `${id}.json`));

  for (const suffix of extraSuffixes) {
    const src = path.join(workspaceRoot, folder, `${id}${suffix}`);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(catalogRoot, folder, `${id}${suffix}`));
      fs.unlinkSync(src);
    }
  }
}

for (const id of pendingSourceIds) {
  deliverEntity("sources", id);
  success(`source/${id} → catalog/sources/${id}.json`);
}

for (const id of pendingConnectorIds) {
  deliverEntity("connectors", id);
  success(`connector/${id} → catalog/connectors/${id}.json`);
}

for (const id of pendingCompanyIds) {
  deliverEntity("companies", id, [".provenance.json"]);
  success(`company/${id} → catalog/companies/${id}.json`);
}

console.log();
success("Livraison terminée.");