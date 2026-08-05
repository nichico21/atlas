import { readdirSync } from "fs";

import { loadJson } from "../json-loader";

import { ConnectorDefinition } from "../../models/connector";

export function loadConnector(
  id: string
): ConnectorDefinition {

  return loadJson<ConnectorDefinition>(
    `catalog/connectors/${id}.json`
  );

}

export function listConnectors(): string[] {

  return readdirSync(
    "catalog/connectors"
  )
    .filter(file => file.endsWith(".json"))
    .map(file => file.replace(".json", ""));

}

export function loadConnectors():
  Record<string, ConnectorDefinition> {

  return Object.fromEntries(

    listConnectors().map(id => [

      id,

      loadConnector(id)

    ])

  );

}