import { Catalog } from "../../models/catalog";

import {
  EntityType,
  ValidationResult,
  createValidationResult,
  mergeValidationResults
} from "../../models/validation";

export function validateBusiness(

  entity: object,

  entityType: EntityType,

  entityId: string,

  catalog: Catalog

): ValidationResult {

  const result = createValidationResult();

  mergeValidationResults(

    result,

    validateEvaluation(
      entity,
      entityType,
      entityId,
      catalog
    )

    // validateConnector(...)
    // validateAccess(...)
    // validateMetadata(...)
    // validateFreshness(...)
    // validateStatistics(...)

  );

  return result;

}

function validateEvaluation(

  entity: object,

  entityType: EntityType,

  entityId: string,

  catalog: Catalog

): ValidationResult {

  const data = entity as Record<string, unknown>;

  const result = createValidationResult();

  const evaluation =
    data["evaluation"];

  if (!evaluation) {

    return result;

  }

  if (typeof evaluation !== "object") {

    return result;

  }

  const evaluationData =
    evaluation as Record<string, unknown>;

  for (const criterion of catalog.evaluation.criteria) {

    const value =
      evaluationData[criterion.id];

    if (value === undefined) {

      result.issues.push({

        level: "error",

        code: "MISSING_EVALUATION",

        entity: entityType,

        entityId,

        fieldId: criterion.id,

        message:
          `Missing evaluation criterion "${criterion.id}".`

      });

      continue;

    }

    if (typeof value !== "number") {

      result.issues.push({

        level: "error",

        code: "INVALID_EVALUATION",

        entity: entityType,

        entityId,

        fieldId: criterion.id,

        value,

        expectedType: "number",

        message:
          `Evaluation "${criterion.id}" should be a number.`

      });

      continue;

    }

    if (value < 0 || value > criterion.weight) {

      result.issues.push({

        level: "error",

        code: "INVALID_SCORE",

        entity: entityType,

        entityId,

        fieldId: criterion.id,

        value,

        message:
          `Score for "${criterion.id}" must be between 0 and ${criterion.weight}.`

      });

    }

  }

  return result;

}