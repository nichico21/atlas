import { Catalog } from "../../models/catalog";

import {
  ValidationResult,
  createValidationResult,
  mergeValidationResults,
} from "../../models/validation";

import { validateStructure } from "./structure-validator";
import { validateReferences } from "./reference-validator";
import { validateBusiness } from "./business-validator";
import { validateConsistency } from "./consistency-validator";

export function validateCatalog(
  catalog: Catalog
): ValidationResult {

  const result = createValidationResult();

  for (const [sourceId, source] of Object.entries(catalog.sources)) {

    mergeValidationResults(

      result,

      validateStructure(
        source,
        "source",
        sourceId,
        catalog.fields
      ),

      validateReferences(
        source,
        "source",
        sourceId,
        catalog.fields,
        catalog
      ),

      validateBusiness(
        source,
        "source",
        sourceId,
        catalog
      )

    );

  }

for (const [connectorId, connector] of Object.entries(catalog.connectors)) {

  mergeValidationResults(

    result,

    validateStructure(
      connector,
      "connector",
      connectorId,
      catalog.connectorFields
    ),

    validateReferences(
      connector,
      "connector",
      connectorId,
      catalog.connectorFields,
      catalog
    ),

    validateBusiness(
      connector,
      "connector",
      connectorId,
      catalog
    )

  );

}

  mergeValidationResults(

    result,

    validateConsistency(
      catalog
    )

  );

  return result;

}