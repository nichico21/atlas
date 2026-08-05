export type ValidationLevel =
  | "error"
  | "warning"
  | "info";

  export type EntityType =
  | "source"
  | "connector"
  | "company"
  | "opportunity"
  | "buyer"
  | "organization";

export interface ValidationIssue {

  /**
   * Niveau de gravité.
   */
  level: ValidationLevel;

  /**
   * Code unique de l'erreur.
   * Ex. REQUIRED_FIELD, INVALID_URL...
   */
  code: string;

  /**
   * Entité concernée.
   * Ex. source, company, opportunity...
   */
  entity: EntityType;

  /**
   * Identifiant de l'objet concerné.
   * Ex. "gifen", "france2030"...
   */
  entityId?: string;

  /**
   * Champ concerné.
   * Ex. "url", "role", "license"...
   */
  fieldId?: string;

  /**
   * Valeur ayant provoqué l'erreur.
   */
  value?: unknown;

  /**
   * Message destiné à l'utilisateur.
   */
  message: string;

  /**
   * Proposition de correction.
   */
  suggestion?: string;

  allowedValues?: string[];

  expectedType?: string

}

export interface ValidationResult {

  issues: ValidationIssue[];

}

export function createValidationResult(): ValidationResult {

  return {

    issues: []

  };

}

export function mergeValidationResults(
  target: ValidationResult,
  ...results: ValidationResult[]
): ValidationResult {

  for (const result of results) {

    target.issues.push(...result.issues);

  }

  return target;

}