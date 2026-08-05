import fs from "fs";
import path from "path";

function loadJsonDir(dirPath: string): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  if (!fs.existsSync(dirPath)) return result;

  for (const file of fs.readdirSync(dirPath)) {
    if (!file.endsWith(".json")) continue;
    const key = file.replace(".json", "");
    const content = fs.readFileSync(path.join(dirPath, file), "utf8");
    result[key] = JSON.parse(content);
  }

  return result;
}

export function loadCatalogForPrompt(): string {
  const catalogRoot = path.join(process.cwd(), "catalog");

  const catalog = {
    fields: loadJsonDir(path.join(catalogRoot, "fields")),
    vocabularies: loadJsonDir(path.join(catalogRoot, "vocabularies")),
    evaluation: loadJsonDir(path.join(catalogRoot, "evaluation"))
  };

  return [
    "# Atlas Catalog (référentiel officiel — à respecter strictement)",
    "",
    "## FieldDefinitions",
    JSON.stringify(catalog.fields, null, 2),
    "",
    "## Vocabularies",
    JSON.stringify(catalog.vocabularies, null, 2),
    "",
    "## Evaluation model",
    JSON.stringify(catalog.evaluation, null, 2)
  ].join("\n");
}