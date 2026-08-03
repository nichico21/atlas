import { FieldDefinition } from "../../models/field";

import {
  EntityType,
  ValidationResult,
  createValidationResult
} from "../../models/validation";

export function validateStructure(

  entity: object,

  entityType: EntityType,

  entityId: string,

  fields: FieldDefinition[]

): ValidationResult {

  function getFieldValue(

  entity: Record<string, unknown>,

  field: FieldDefinition

): unknown {

  if (!field.parent) {

    return entity[field.id];

  }

  const parent =
    entity[field.parent] as
      Record<string, unknown>;

  if (!parent) {

    return undefined;

  }

  return parent[field.id];

}

const data = entity as Record<string, unknown>;

  const result = createValidationResult();

  for (const field of fields) {

    const value = getFieldValue(
  data,
  field
);

    // -----------------------
    // Required fields
    // -----------------------

    if (field.required && value === undefined) {

      result.issues.push({

        level: "error",

        code: "REQUIRED_FIELD",

        entity: entityType,

        entityId,

        fieldId: field.id,

        value,

        expectedType: field.type,

        message: `Required field "${field.id}" is missing.`

      });

      continue;

    }

    // Champ absent et non obligatoire

    if (value === undefined) {

      continue;

    }

    // -----------------------
    // Type validation
    // -----------------------

    if (!isValidType(value, field.type)) {

      result.issues.push({

        level: "error",

        code: "INVALID_TYPE",

        entity: entityType,

        entityId,

        fieldId: field.id,

        value,

        message:
          `Field "${field.id}" should be of type "${field.type}".`

      });

    }

  }

  return result;

}

function isValidType(

  value: unknown,

  type: string

): boolean {

  switch (type) {

    case "text":
    case "long-text":
    case "single-select":
      return typeof value === "string";

    case "multi-select":
      return Array.isArray(value);

    case "number":
    case "rating":
      return typeof value === "number";

    case "boolean":
      return typeof value === "boolean";

    case "date":

  return (

    typeof value === "string"

    &&

    !isNaN(Date.parse(value))

  );

    case "url":

  try {

    new URL(value as string);

    return true;

  } catch {

    return false;

  }

    default:

      return true;

  }

}