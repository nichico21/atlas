export interface ValidationResult {
  errors: string[];
  warnings: string[];
}

export function createValidationResult(): ValidationResult {
  return {
    errors: [],
    warnings: [],
  };
}

export function mergeValidationResults(
  ...results: ValidationResult[]
): ValidationResult {

  const merged = createValidationResult();

  for (const result of results) {
    merged.errors.push(...result.errors);
    merged.warnings.push(...result.warnings);
  }

  return merged;
}