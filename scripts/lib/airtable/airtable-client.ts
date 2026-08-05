export interface AirtableConfig {
  apiKey: string;
  baseId: string;
}

export interface AirtableRecordResponse {
  id: string;
  fields: Record<string, unknown>;
}

export class AirtableClient {

  constructor(
    private readonly config: AirtableConfig
  ) {}

  private baseUrl(tableName: string): string {
    return `https://api.airtable.com/v0/${this.config.baseId}/${encodeURIComponent(tableName)}`;
  }

  private headers(): Record<string, string> {
    return {
      Authorization: `Bearer ${this.config.apiKey}`,
      "Content-Type": "application/json"
    };
  }

  async findRecordByFieldValue(
    tableName: string,
    fieldName: string,
    value: string
  ): Promise<AirtableRecordResponse | null> {

    const formula = encodeURIComponent(`{${fieldName}} = "${value}"`);
    const url = `${this.baseUrl(tableName)}?filterByFormula=${formula}&maxRecords=1`;

    const response = await fetch(url, { headers: this.headers() });

    if (!response.ok) {
  const errorBody = await response.text();
  throw new Error(`Airtable: échec de la recherche (${response.status}) — ${errorBody}`);
}

    const data = await response.json();
    return data.records.length > 0 ? data.records[0] : null;
  }

  async createRecord(
    tableName: string,
    fields: Record<string, unknown>
  ): Promise<AirtableRecordResponse> {

    const response = await fetch(this.baseUrl(tableName), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({ fields })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Airtable: échec de la création (${response.status}) — ${errorBody}`);
    }

    return response.json();
  }

  async updateRecord(
    tableName: string,
    recordId: string,
    fields: Record<string, unknown>
  ): Promise<AirtableRecordResponse> {

    const response = await fetch(`${this.baseUrl(tableName)}/${recordId}`, {
      method: "PATCH",
      headers: this.headers(),
      body: JSON.stringify({ fields })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Airtable: échec de la mise à jour (${response.status}) — ${errorBody}`);
    }

    return response.json();
  }
}