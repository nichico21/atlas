import fs from "fs";
import path from "path";
import { Vocabulary } from "../../models/vocabulary";

function walkVocabularies(
  dir: string,
  baseDir: string,
  result: Record<string, Vocabulary>
): void {

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkVocabularies(fullPath, baseDir, result);
      continue;
    }

    if (!entry.name.endsWith(".json")) continue;

    const relativePath = path.relative(baseDir, fullPath);
    const key = relativePath.replace(/\.json$/, "").split(path.sep).join("/");

    result[key] = JSON.parse(fs.readFileSync(fullPath, "utf8"));
  }
}

export function loadVocabularies(): Record<string, Vocabulary> {
  const baseDir = path.join(process.cwd(), "catalog/vocabularies");
  const result: Record<string, Vocabulary> = {};
  walkVocabularies(baseDir, baseDir, result);
  return result;
}