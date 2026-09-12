import fs from "fs";
import path from "path";
import { computeCompletion } from "./completion-score";
import { loadFields } from "./loaders/field-loader";
import { loadCompanies as loadCatalogCompanies } from "./loaders/company-loader";

const COMPLETION_THRESHOLD = 0.6;

function loadWorkspaceCompanies(): Record<string, Record<string, unknown>> {
  const dir = path.join(process.cwd(), "0_workspace/companies");
  const result: Record<string, Record<string, unknown>> = {};
  if (!fs.existsSync(dir)) return result;

  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".json") || file.endsWith(".provenance.json") || file.startsWith("_")) continue;
    const id = file.replace(".json", "");
    result[id] = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
  }
  return result;
}

export function loadWellCompletedUrls(): Set<string> {
  const fields = loadFields("company");
  const all = {
    ...loadCatalogCompanies(),
    ...loadWorkspaceCompanies()
  };

  const urls = new Set<string>();

  for (const company of Object.values(all)) {
    const completion = computeCompletion(company as Record<string, unknown>, fields);
    if (completion.score >= COMPLETION_THRESHOLD && company["sourceUrl"]) {
      urls.add((company["sourceUrl"] as string).split("#")[0]);
    }
  }

  console.log(`${urls.size} URL(s) déjà bien complétées, seront ignorées.`);
  return urls;
}