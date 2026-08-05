import fs from "fs";
import path from "path";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // retire les accents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function computeSourceId(source: { name: string; acronym?: string | null }): string {
  return slugify(source.acronym || source.name);
}

export function computeConnectorId(
  sourceId: string,
  primaryAccessMethod: string
): string {
  return `${sourceId}-${primaryAccessMethod}`;
}

const FSIP_FIELD_IDS = [
  "strategicValue",
  "informationRichness",
  "exploitability",
  "reliability",
  "coverage"
] as const;

export function computeFsipScore(source: { evaluation?: Record<string, number> }): number {
  return FSIP_FIELD_IDS.reduce(
    (total, id) => total + (source.evaluation?.[id] ?? 0),
    0
  );
}

function findVocabularyLabel(vocabularyName: string, valueId: string): string {
  const filePath = path.join(
    process.cwd(),
    "catalog/vocabularies",
    `${vocabularyName}.json`
  );
  const raw = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const found = raw.values.find((v: { id: string }) => v.id === valueId);
  return found ? found.label : valueId;
}

export function computeConnectorLabel(
  sourceName: string,
  primaryAccessMethod: string
): string {
  const accessMethodLabel = findVocabularyLabel("access-method", primaryAccessMethod);
  return `${sourceName} ${accessMethodLabel}`;
}

export function computeLastUpdated(): string {
  return new Date().toISOString().split("T")[0]; // format AAAA-MM-JJ
}