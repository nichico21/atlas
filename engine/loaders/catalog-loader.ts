import fs from "fs";
import path from "path";

interface FieldDefinition {
  id: string;
  valueSource?: { type: string; name: string };
}

function loadJson(filePath: string): unknown {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export function loadCatalogForPrompt(scope: "source" | "company"): string {
  const catalogRoot = path.join(process.cwd(), "catalog");

  const fields: Record<string, unknown> = {};

  if (scope === "source") {
    fields["source-fields"] = loadJson(path.join(catalogRoot, "fields/source-fields.json"));
    fields["connector-fields"] = loadJson(path.join(catalogRoot, "fields/connector-fields.json"));
  } else {
    fields["company-fields"] = loadJson(path.join(catalogRoot, "fields/company-fields.json"));
  }

  // N'inclut que les vocabulaires réellement référencés par ces champs
  const vocabNames = new Set<string>();
  for (const fieldList of Object.values(fields) as FieldDefinition[][]) {
    for (const field of fieldList) {
      if (field.valueSource?.type === "vocabulary") {
        vocabNames.add(field.valueSource.name);
      }
    }
  }

  const vocabularies: Record<string, unknown> = {};
  for (const name of vocabNames) {
    const filePath = path.join(catalogRoot, "vocabularies", `${name}.json`);
    if (fs.existsSync(filePath)) {
      vocabularies[name] = loadJson(filePath);
    }
  }

  const sections = [
    "# Atlas Catalog (référentiel officiel — à respecter strictement)",
    "",
    "## FieldDefinitions",
    JSON.stringify(fields, null, 2),
    "",
    "## Vocabularies",
    JSON.stringify(vocabularies, null, 2)
  ];

  if (scope === "source") {
    const evaluation = loadJson(path.join(catalogRoot, "evaluation/score-model.json"));
    sections.push("", "## Evaluation model", JSON.stringify(evaluation, null, 2));
  }

  return sections.join("\n");
}