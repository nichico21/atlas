import { FieldDefinition } from "../models/field";
import { CompanyProvenance, FieldContribution } from "../models/company-provenance";
import { computeConfidence } from "./confidence";

function pickBestContribution(
  contributions: FieldContribution[]
): FieldContribution {
  return contributions.reduce((best, current) =>
    current.confidence > best.confidence ? current : best
  );
}

function resolveField(
  field: FieldDefinition,
  contributions: FieldContribution[]
): unknown {
  if (contributions.length === 0) return undefined;

  if (field.type === "multi-select") {
    // Union des valeurs de toutes les contributions, dédupliquée
    const merged = new Set<string>();
    for (const c of contributions) {
      for (const v of c.value as string[]) merged.add(v);
    }
    return Array.from(merged);
  }

  // Pour tout le reste : la contribution la plus fiable gagne
  return pickBestContribution(contributions).value;
}

export function resolveCompany(
  provenance: CompanyProvenance,
  fields: FieldDefinition[]
): Record<string, unknown> {

  const resolved: Record<string, unknown> = {};

  for (const field of fields) {
    const contributions = provenance.fields[field.id];
    if (!contributions || contributions.length === 0) continue;

    resolved[field.id] = resolveField(field, contributions);
  }

  resolved["sourceIds"] = Array.from(
    new Set(
      Object.values(provenance.fields)
        .flat()
        .map((c) => c.sourceId)
    )
  );

  resolved["lastUpdated"] = new Date().toISOString().split("T")[0];

  return resolved;
}

export function mergeProvenance(
  existing: CompanyProvenance | null,
  companyId: string,
  newExtraction: Record<string, unknown>,
  explicitFields: string[],
  sourceId: string,
  sourceReliability: number
): CompanyProvenance {

  const provenance: CompanyProvenance = existing ?? { companyId, fields: {} };
  const extractedAt = new Date().toISOString().split("T")[0];

  for (const [fieldId, value] of Object.entries(newExtraction)) {
    if (value === undefined || value === null) continue;
    if (["sourceId", "sourceUrl", "completionStatus", "explicitFields"].includes(fieldId)) continue;

    if (!provenance.fields[fieldId]) provenance.fields[fieldId] = [];

    provenance.fields[fieldId].push({
      value,
      sourceId,
      sourceReliability,
      explicitlyStated: explicitFields.includes(fieldId),
      extractedAt,
      confidence: computeConfidence(sourceReliability, explicitFields.includes(fieldId))
    });
  }

  return provenance;
}