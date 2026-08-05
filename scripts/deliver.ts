import fs from "fs";
import path from "path";

import { banner, success, error } from "./lib/logger";
import { loadCatalog } from "./lib/loaders/catalog-loader";
import { validateCatalog } from "./lib/validation/validation-engine";
import { Source } from "./models/source";
import { ConnectorDefinition } from "./models/connector";

banner("Atlas Delivery — Workspace → Catalog");

const workspaceRoot = path.join(process.cwd(), "0_workspace");
const catalogRoot = path.join(process.cwd(), "catalog");

function loadWorkspaceJson<T>(folder: string): Record<string, T> {
  const dirPath = path.join(workspaceRoot, folder);
  const result: Record<string, T> = {};

  if (!fs.existsSync(dirPath)) return result;

  for (const file of fs.readdirSync(dirPath)) {
    if (!file.endsWith(".json")) continue;
    const id = file.replace(".json", "");
    const content = fs.readFileSync(path.join(dirPath, file), "utf8");
    result[id] = JSON.parse(content) as T;
  }

  return result;
}

console.log("Chargement des fiches en attente dans 0_workspace...");
console.log();

const pendingSources = loadWorkspaceJson<Source>("sources");
const pendingConnectors = loadWorkspaceJson<ConnectorDefinition>("connectors");

const pendingSourceIds = Object.keys(pendingSources);
const pendingConnectorIds = Object.keys(pendingConnectors);

if (pendingSourceIds.length === 0 && pendingConnectorIds.length === 0) {
  success("Rien à livrer — 0_workspace est vide.");
  process.exit(0);
}

success(`${pendingSourceIds.length} source(s) et ${pendingConnectorIds.length} connecteur(s) en attente`);
console.log();

console.log("Chargement du catalogue existant...");
const catalog = loadCatalog();

const mergedCatalog = {
  ...catalog,
  sources: { ...catalog.sources, ...pendingSources },
  connectors: { ...catalog.connectors, ...pendingConnectors }
};

console.log("Validation des fiches en attente...");
console.log();

const validation = validateCatalog(mergedCatalog);

const relevantIssues = validation.issues.filter((issue) =>
  (issue.entity === "source" && issue.entityId && pendingSourceIds.includes(issue.entityId)) ||
  (issue.entity === "connector" && issue.entityId && pendingConnectorIds.includes(issue.entityId))
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

for (const id of pendingSourceIds) {
  fs.copyFileSync(
    path.join(workspaceRoot, "sources", `${id}.json`),
    path.join(catalogRoot, "sources", `${id}.json`)
  );
  fs.unlinkSync(path.join(workspaceRoot, "sources", `${id}.json`));
  success(`source/${id} → catalog/sources/${id}.json`);
}

for (const id of pendingConnectorIds) {
  fs.copyFileSync(
    path.join(workspaceRoot, "connectors", `${id}.json`),
    path.join(catalogRoot, "connectors", `${id}.json`)
  );
  fs.unlinkSync(path.join(workspaceRoot, "connectors", `${id}.json`));
  success(`connector/${id} → catalog/connectors/${id}.json`);
}

console.log();
success("Livraison terminée.");