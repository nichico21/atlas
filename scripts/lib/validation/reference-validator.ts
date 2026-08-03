import { Catalog } from "../../models/catalog";
import { FieldDefinition } from "../../models/field";
import { Vocabulary } from "../../models/vocabulary";
import {
  EntityType,
  ValidationResult,
  createValidationResult
} from "../../models/validation";

export function validateReferences(

  entity: object,

  entityType: EntityType,

  entityId: string,

  fields: FieldDefinition[],

  catalog: Catalog

): ValidationResult {

const data = entity as Record<string, unknown>;

  const result = createValidationResult();

  for (const field of fields) {

    if (!field.valueSource) {

      continue;

    }

    if (field.valueSource.type !== "vocabulary") {

      continue;

    }

    const vocabulary =
      catalog.vocabularies[field.valueSource.name];

    if (!vocabulary) {

      result.issues.push({

        level: "error",

        code: "UNKNOWN_VOCABULARY",

        entity: entityType,

        entityId,

        fieldId: field.id,

        message:
          `Vocabulary "${field.valueSource.name}" not found.`

      });

      continue;

    }

    const value = getFieldValue(
  data,
  field
);

    if (value === undefined) {

      continue;

    }

    if (field.type === "single-select") {

      validateValue(
        value,
        vocabulary,
        field,
        entityType,
        entityId,
        result
      );

    }

    if (field.type === "multi-select") {

      if (!Array.isArray(value)) {

        continue;

      }

      for (const item of value) {

        validateValue(
          item,
          vocabulary,
          field,
          entityType,
          entityId,
          result
        );

      }

    }

  }

  return result;

}

function getFieldValue(
  entity: Record<string, unknown>,
  field: FieldDefinition
): unknown {

  if (!field.parent) {

    return entity[field.id];

  }

  const parent =
    entity[field.parent] as Record<string, unknown> | undefined;

  if (!parent) {

    return undefined;

  }

  return parent[field.id];

}


function validateValue(

  value: unknown,

  vocabulary: Vocabulary,

  field: FieldDefinition,

  entity: EntityType,

  entityId: string,

  result: ValidationResult

): void {

  if (typeof value !== "string") {

    return;

  }

  const exists =
    vocabulary.values.some(
      item => item.id === value
    );

  if (!exists) {

    result.issues.push({

      level: "error",

      code: "INVALID_REFERENCE",

      entity,

      entityId,

      fieldId: field.id,

      value,

      allowedValues: vocabulary.values.map(
        item => item.id
      ),

      message:
        `"${value}" is not a valid value for "${field.id}".`,

      suggestion:
        `Use one of the values defined in vocabulary "${field.valueSource?.name}".`

    });

  }

}