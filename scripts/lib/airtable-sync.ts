import { AirtableClient } from "./airtable-client";
import { mapSourceToAirtable } from "./airtable-mapper";

import { Source } from "../models/source";

export class AirtableSync {

  constructor(
    private readonly client: AirtableClient
  ) {}

  async syncSource(
    source: Source
  ): Promise<void> {

    const record =
      mapSourceToAirtable(source);

    console.log(
      `Synchronizing ${source.name}...`
    );

    console.log(record);

    // Bientôt :
    //
    // await this.client.createRecord(record);
    //
    // ou
    //
    // await this.client.updateRecord(record);

  }

}