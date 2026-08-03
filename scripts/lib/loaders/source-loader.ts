import { readdirSync } from "fs";

import { loadJson } from "../json-loader";

import { Source } from "../../models/source";

export function loadSource(
  id: string
): Source {

  return loadJson<Source>(
    `catalog/sources/${id}.json`
  );

}

export function listSources(): string[] {

  return readdirSync(
    "catalog/sources"
  )
    .filter(file => file.endsWith(".json"))
    .map(file => file.replace(".json", ""));

}

export function loadSources():
  Record<string, Source> {

    const sources = listSources();

  return Object.fromEntries(

    listSources().map(id => [

      id,

      loadSource(id)

    ])

  );

}