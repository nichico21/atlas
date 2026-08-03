import {
  ValidationResult,
  createValidationResult,
} from "../lib/validation";

import { Vocabulary } from "../models/vocabulary";

export function validateVocabularies(
  vocabularies: Record<string, Vocabulary>
): ValidationResult {

  const result = createValidationResult();

  for (const [name, vocabulary] of Object.entries(vocabularies)) {

        if (!vocabulary.version) {
      result.errors.push(
        `vocabularies/${name}.json: missing "version"`
      );
    }

    if (!vocabulary.description) {
      result.errors.push(
        `vocabularies/${name}.json: missing "description"`
      );
    }

    if (!("values" in vocabulary)) {
      result.errors.push(
        `vocabularies/${name}.json: missing "values"`
      );

      continue;
    }

    if (!Array.isArray(vocabulary.values)) {

      result.errors.push(
        `vocabularies/${name}.json: "values" must be an array`
      );

      continue;

    }

    const duplicateIds = vocabulary.values.filter(
  (value, index) =>
    vocabulary.values.findIndex(v => v.id === value.id) !== index
);

for (const duplicate of duplicateIds) {
  result.errors.push(
    `vocabularies/${name}.json: duplicate id "${duplicate.id}"`
  );
}

  }

 return result;

}