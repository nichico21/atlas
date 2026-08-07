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
    ), 

validateSectorCoherence(
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

function validateSectorCoherence(

  entity: object,

  entityType: EntityType,

  entityId: string,

  catalog: Catalog

): ValidationResult {

  const result = createValidationResult();

  if (entityType !== "company") {
    return result;
  }

  const data = entity as Record<string, unknown>;

  const primarySectors = data["primarySectors"] as string[] | undefined;
  const subSectors = data["subSectors"] as string[] | undefined;

  if (!subSectors || subSectors.length === 0) {
    return result;
  }

  const subSectorVocabulary = catalog.vocabularies["companies/sub-sectors"];

  if (!subSectorVocabulary) {
    return result;
  }

  for (const subSectorId of subSectors) {

    const entry = subSectorVocabulary.values.find(
      (v) => v.id === subSectorId
    );

    if (!entry) {
      continue; // valeur déjà signalée par le Reference Validator si invalide
    }

    const parentSector = (entry as { parentSector?: string }).parentSector;

    if (!parentSector) {
      continue;
    }

    if (!primarySectors || !primarySectors.includes(parentSector)) {

      result.issues.push({

        level: "error",

        code: "SECTOR_MISMATCH",

        entity: entityType,

        entityId,

        fieldId: "subSectors",

        value: subSectorId,

        message:
          `Sub-sector "${subSectorId}" belongs to sector "${parentSector}", which is not present in primarySectors.`

      });

    }

  }

  return result;

}