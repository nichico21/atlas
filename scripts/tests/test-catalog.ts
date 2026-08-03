import { loadCatalog } from "../lib/loaders/catalog-loader";

import { validateCatalog } from "../lib/validation/validation-engine";

import { printValidationReport } from "../lib/reporters/validation-reporter";

const catalog = loadCatalog();

const validation = validateCatalog(catalog);

printValidationReport(
  catalog,
  validation
);