import { AirtableClient } from "./airtable-client";
import { mapSourceToAirtable, mapConnectorToAirtable } from "./airtable-mapper";

import { Source } from "../../models/source";
import { ConnectorDefinition } from "../../models/connector";

const SOURCES_TABLE = "Sources";
const CONNECTORS_TABLE = "Connectors";

export class AirtableSync {

  constructor(
    private readonly client: AirtableClient
  ) {}

  private async upsert(
    tableName: string,
    idFieldName: string,
    id: string,
    fields: Record<string, unknown>
  ): Promise<void> {

    const existing = await this.client.findRecordByFieldValue(tableName, idFieldName, id);

  if (existing) {
    await this.client.updateRecord(tableName, existing.id, fields);
    console.log(`  ↻ Mis à jour : ${id}`);
  } else {
    await this.client.createRecord(tableName, fields);
    console.log(`  + Créé : ${id}`);
  }
}

async syncSource(source: Source): Promise<void> {
  const record = mapSourceToAirtable(source);
  console.log(`Synchronisation source ${source.name}...`);
  await this.upsert(SOURCES_TABLE, "ID", source.id, record.fields);
}

async syncConnector(connector: ConnectorDefinition): Promise<void> {
  const record = mapConnectorToAirtable(connector);
  console.log(`Synchronisation connecteur ${connector.label}...`);
  await this.upsert(CONNECTORS_TABLE, "Identifier", connector.id, record.fields);
}
}