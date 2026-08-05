export interface FieldContribution {
  value: unknown;
  sourceId: string;
  sourceReliability: number;
  explicitlyStated: boolean;
  extractedAt: string;
  confidence: number;
}

export interface CompanyProvenance {
  companyId: string;
  fields: Record<string, FieldContribution[]>;
}