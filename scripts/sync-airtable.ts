import dotenv from "dotenv";

dotenv.config({
  path: ".env.local"
});

import { loadCatalog } from "./lib/loaders/catalog-loader";
import { validateCatalog } from "./lib/validation/validation-engine";
import { previewRecords } from "./lib/airtable/airtable-preview";
import { mapSourceToAirtable, mapConnectorToAirtable } from "./lib/airtable/airtable-mapper";
import { AirtableClient } from "./lib/airtable/airtable-client";
import { AirtableSync } from "./lib/airtable/airtable-sync";

async function main() {

  console.log("Atlas → Airtable Sync");
  console.log();

  console.log("Loading catalog...");
  const catalog = loadCatalog();

  console.log("Running validations...");
  const validation = validateCatalog(catalog);

  if (validation.issues.length > 0) {

    console.error();
    console.error("Validation failed:");

    validation.issues.forEach((issue) =>
      console.error(`- [${issue.level}] ${issue.entity}/${issue.entityId} (${issue.fieldId ?? ""}) — ${issue.message}`)
    );

    process.exit(1);

  }

  console.log("Generating Airtable records (preview)...");

  const sourceRecords = Object.values(catalog.sources).map(mapSourceToAirtable);
  const connectorRecords = Object.values(catalog.connectors).map(mapConnectorToAirtable);

  previewRecords(sourceRecords);
  previewRecords(connectorRecords);

  const dryRun = process.argv.includes("--dry-run");

  if (dryRun) {
    console.log();
    console.log("Mode --dry-run : aucune écriture envoyée à Airtable.");
    return;
  }

  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!apiKey || !baseId) {
    console.error();
    console.error("AIRTABLE_API_KEY et AIRTABLE_BASE_ID doivent être définis dans .env.local");
    process.exit(1);
  }

  const client = new AirtableClient({ apiKey, baseId });
  const sync = new AirtableSync(client);

  console.log();
  console.log("Synchronisation avec Airtable...");
  console.log();

  for (const source of Object.values(catalog.sources)) {
    await sync.syncSource(source);
  }

  for (const connector of Object.values(catalog.connectors)) {
    await sync.syncConnector(connector);
  }

  console.log();
  console.log("Synchronisation terminée.");

}

main().catch(console.error);