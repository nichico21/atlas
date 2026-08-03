import { Catalog } from "../../models/catalog";
import {
  ValidationResult,
  createValidationResult,
} from "../../models/validation";

export function validateConsistency(
  catalog: Catalog
): ValidationResult {

  const result = createValidationResult();

  // Les règles de cohérence globale viendront ici.

  return result;

}