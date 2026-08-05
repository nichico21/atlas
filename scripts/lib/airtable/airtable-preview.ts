import { AirtableRecord } from "../../models/airtable";

export function previewRecord(
  record: AirtableRecord
): void {

  console.log("------------------------------------------");

  for (const [field, value] of Object.entries(record.fields)) {

    console.log(
      `${field.padEnd(12)}: ${value}`
    );

  }

}

export function previewRecords(
  records: AirtableRecord[]
): void {

  console.log();

  console.log("Preview");

  console.log();

  for (const record of records) {

    previewRecord(record);

  }

}