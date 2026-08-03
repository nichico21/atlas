import {
  ValidationResult,
  createValidationResult,
} from "../lib/validation";

import { Source } from "../models/source";

export function validateSources(
  sources: Record<string, Source>
): ValidationResult {

  const result = createValidationResult();

  for (const [fileName, source] of Object.entries(sources)) {


    if (!source.id) {
      result.errors.push(`sources/${fileName}.json: missing "id"`);
    }

    if (!source.name) {
      result.errors.push(`sources/${fileName}.json: missing "name"`);
    }

    if (!source.description) {
      result.errors.push(`sources/${fileName}.json: missing "description"`);
    }

    if (!source.url) {
      result.errors.push(`sources/${fileName}.json: missing "url"`);
    }

    if (!source.type) {
      result.errors.push(`sources/${fileName}.json: missing "type"`);
    }

    if (!source.evaluation) {
      result.errors.push(`sources/${fileName}.json: missing "evaluation"`);
    }

  }

  return result;

}