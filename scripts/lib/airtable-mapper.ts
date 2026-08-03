import { Source } from "../models/source";
import { AirtableRecord } from "../models/airtable";

export function mapSourceToAirtable(
  source: Source
): AirtableRecord {

  return {

    fields: {

        ID: source.id,

        Name: source.name,

        Description: source.description,

        URL: source.url,

        Status: source.status,

    }

};

}