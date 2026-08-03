import { readdirSync } from "fs";

import { loadJson } from "../json-loader";

import { Vocabulary } from "../../models/vocabulary";

export function loadVocabulary(
  id: string
): Vocabulary {

  return loadJson<Vocabulary>(
    `catalog/vocabularies/${id}.json`
  );

}

export function listVocabularies(): string[] {

  return readdirSync(
    "catalog/vocabularies"
  )
    .filter(file => file.endsWith(".json"))
    .map(file => file.replace(".json", ""));

}

export function loadVocabularies():
  Record<string, Vocabulary> {

  const vocabularies = listVocabularies();

  return Object.fromEntries(

    vocabularies.map(id => [

      id,

      loadVocabulary(id)

    ])

  );

}