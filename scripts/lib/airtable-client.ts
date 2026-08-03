export interface AirtableConfig {

  apiKey: string;

  baseId: string;

}

export class AirtableClient {

  constructor(
    private readonly config: AirtableConfig
  ) {}

}