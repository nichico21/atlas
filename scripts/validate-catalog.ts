import path from "path";

import { banner, success, error } from "./lib/logger";
import { loadCatalog } from "./lib/loaders/catalog-loader";

import { validateCatalog } from "./lib/validation/validation-engine";

banner("FSIP Catalog Validator");

const catalogPath = path.join(process.cwd(), "catalog");

console.log("Loading catalog...");
console.log();

const catalog = loadCatalog();

const evaluation = catalog.evaluation as any;

success("Evaluation model");
console.log(`   Version   : ${evaluation.version}`);
console.log(`   Criteria  : ${evaluation.criteria.length}`);
console.log(`   Max score : ${evaluation.maxScore}`);
console.log();

success(`${Object.keys(catalog.sources).length} sources`);

success(`${Object.keys(catalog.companies).length} entreprises`);

console.log();
console.log("Running validations...");

const validation =
  validateCatalog (catalog);

console.log();

const issues = validation.issues;

if (issues.length === 0) {

  success("No validation issues");

} else {

  for (const issue of issues)
    error(`[${issue.level}] ${issue.entity}${issue.entityId ? `/${issue.entityId}` : ""}${issue.fieldId ? ` (${issue.fieldId})` : ""} — ${issue.message}`);

}


console.log();
console.log("Summary");
console.log();

if (issues.length === 0) {

  success("Catalog VALID");

} else {

  error(`${issues.length} error(s)`);

  process.exit(1);

}