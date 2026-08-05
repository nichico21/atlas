import fs from "fs";
import path from "path";

import { FieldDefinition } from "../../models/field";
import { AirtableRecord } from "../../models/airtable";
import { Source } from "../../models/source";
import { ConnectorDefinition } from "../../models/connector";
import { loadFields } from "../loaders/field-loader";

interface VocabularyValue { id: string; label: string }
interface VocabularyFile { values: VocabularyValue[] }

const vocabularyLabelCache = new Map<string, Map<string, string>>();

function loadVocabularyLabels(vocabularyName: string): Map<string, string> {
  if (vocabularyLabelCache.has(vocabularyName)) {
    return vocabularyLabelCache.get(vocabularyName)!;
  }

  const filePath = path.join(
    process.cwd(),
    "catalog/vocabularies",
    `${vocabularyName}.json`
  );

  const raw: VocabularyFile = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const map = new Map(raw.values.map((v) => [v.id, v.label]));

  vocabularyLabelCache.set(vocabularyName, map);
  return map;
}

function resolveLabel(vocabularyName: string, valueId: string): string {
  return loadVocabularyLabels(vocabularyName).get(valueId) ?? valueId;
}

function getFieldValue(
  entity: Record<string, unknown>,
  field: FieldDefinition
): unknown {
  if (!field.parent) {
    return entity[field.id];
  }

  const parent = entity[field.parent] as Record<string, unknown> | undefined;
  return parent ? parent[field.id] : undefined;
}

function convertValue(value: unknown, field: FieldDefinition): unknown {
  if (value === undefined || value === null) return null;

  const ref = field.valueSource;

  if (field.type === "single-select" && ref?.type === "vocabulary") {
    return resolveLabel(ref.name, value as string);
  }

  if (field.type === "multi-select" && ref?.type === "vocabulary") {
    return (value as string[]).map((v) => resolveLabel(ref.name, v));
  }

  return value;
}

function buildAirtableFields(
  entity: Record<string, unknown>,
  fields: FieldDefinition[]
): Record<string, unknown> {

  const airtableFields: Record<string, unknown> = {};

  for (const field of fields) {
    const rawValue = getFieldValue(entity, field);
    if (rawValue === undefined) continue;

    airtableFields[field.label] = convertValue(rawValue, field);
  }

  return airtableFields;
}

export function mapSourceToAirtable(
  source: Source
): AirtableRecord {

  const fields = loadFields("source");
  const airtableFields = buildAirtableFields(source as unknown as Record<string, unknown>, fields);

  // "id" n'est pas déclaré dans source-fields.json — ajouté manuellement.
  airtableFields["ID"] = source.id;

  return { fields: airtableFields };
}

export function mapConnectorToAirtable(
  connector: ConnectorDefinition
): AirtableRecord {

  const fields = loadFields("connector");
  const airtableFields = buildAirtableFields(connector as unknown as Record<string, unknown>, fields);

  return { fields: airtableFields };
}