import { FieldDefinition } from "../models/field";

export interface CompletionResult {
  companyId: string;
  score: number;
  filledCount: number;
  totalCount: number;
  missingRequiredFields: string[];
}

export function computeCompletion(
  company: Record<string, unknown>,
  fields: FieldDefinition[]
): CompletionResult {

  const relevant = fields.filter(f => f.aiFillable !== false);
  const filled = relevant.filter(f => company[f.id] !== undefined && company[f.id] !== null);

  const missingRequiredFields = relevant
    .filter(f => f.required && (company[f.id] === undefined || company[f.id] === null))
    .map(f => f.id);

  return {
    companyId: company.id as string,
    score: relevant.length > 0 ? filled.length / relevant.length : 0,
    filledCount: filled.length,
    totalCount: relevant.length,
    missingRequiredFields
  };
}