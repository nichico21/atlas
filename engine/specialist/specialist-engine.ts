import fs from "fs";
import path from "path";
import { loadCatalogForPrompt } from "../loaders/catalog-loader";


interface SpecialistDocument {

  id: string;

  path: string;

  required: boolean;

}

interface SpecialistManifest {

  version: string;

  description: string;

  documents: SpecialistDocument[];

}

export interface SpecialistExecution {

  specialistId: string;

  prompt: string;

  documents: string[];

}

function loadMarkdown(

  specialistFolder: string,

  document: SpecialistDocument

): string {

  const filePath = path.resolve(

    specialistFolder,

    document.path

  );

  if (!fs.existsSync(filePath)) {

    if (document.required) {

      throw new Error(

        `Missing required document:\n${filePath}`

      );

    }

    console.log(
      `⚠ Optional document not found: ${document.id}`
    );

    return "";

  }

  console.log(
    `✓ ${document.id}`
  );

  return fs.readFileSync(

    filePath,

    "utf8"

  );

}

export async function executeSpecialist(
  specialistId: string,
  crawledContent?: { id: string; content: string }
): Promise<SpecialistExecution> {

  console.log();
  console.log("=================================");
  console.log("     Atlas Specialist Engine");
  console.log("=================================");
  console.log();

  const specialistsRoot = path.join(
    process.cwd(),
    "AI specialists"
  );

  const specialistFolder = path.join(
    specialistsRoot,
    specialistId
  );

  const manifestPath = path.join(
    specialistsRoot,
    "specialist-manifest.json"
  );

  if (!fs.existsSync(manifestPath)) {
    throw new Error(
      "specialist-manifest.json not found."
    );
  }

  if (!fs.existsSync(specialistFolder)) {
    throw new Error(
      `Unknown specialist: ${specialistId}`
    );
  }

  const manifest: SpecialistManifest = JSON.parse(
    fs.readFileSync(
      manifestPath,
      "utf8"
    )
  );

  console.log(
    `Loading specialist: ${specialistId}`
  );
  console.log();

  const sections: string[] = [];
  const loadedDocuments: string[] = [];

const catalogContent = loadCatalogForPrompt();
sections.push(catalogContent);
loadedDocuments.push("atlas-catalog");

  for (const document of manifest.documents) {
    const content = loadMarkdown(
      specialistFolder,
      document
    );

    if (content.trim().length > 0) {
      sections.push(content);
      loadedDocuments.push(document.id);
    }
  }

  if (crawledContent && crawledContent.content.trim().length > 0) {
    sections.push(crawledContent.content);
    loadedDocuments.push(crawledContent.id);
  }

  console.log();
  console.log("---------------------------------");
  console.log();
  console.log("Prompt assembled");
  console.log();
  console.log(
    `Documents loaded : ${loadedDocuments.length}`
  );
  console.log();
  console.log("✓ Specialist ready.");
  console.log();

  return {
    specialistId,
    prompt: sections.join("\n\n"),
    documents: loadedDocuments
  };
}