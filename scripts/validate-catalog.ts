import path from "path";

import { banner, success, error } from "./lib/logger";
import { loadCatalog } from "./lib/loaders/catalog-loader";

import { runValidations } from "./lib/validation/validation-engine";

banner("FSIP Catalog Validator");

const catalogPath = path.join(process.cwd(), "catalog");

console.log("Loading catalog...");
console.log();

const result = loadCatalog(catalogPath);
const catalog = result.catalog;

const evaluation = catalog.evaluation as any;

success("Evaluation model");
console.log(`   Version   : ${evaluation.version}`);
console.log(`   Criteria  : ${evaluation.criteria.length}`);
console.log(`   Max score : ${evaluation.maxScore}`);
console.log();

success(`${Object.keys(catalog.vocabularies).length} vocabularies`);

success(`${Object.keys(catalog.sources).length} sources`);

console.log();
console.log("Running validations...");

const validation =
  runValidations(catalog);

console.log();

const errors = [
  ...result.errors,
  ...validation.errors,
];

if (errors.length === 0) {

  success("No JSON parsing errors");

} else {

  for (const errorMessage of validation.errors)
    error(errorMessage);
  }


console.log();
console.log("Summary");
console.log();

if (errors.length === 0) {

  success("Catalog VALID");

} else {

  error(`${errors.length} error(s)`);

  process.exit(1);

}