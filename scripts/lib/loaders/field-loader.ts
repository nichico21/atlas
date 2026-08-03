import { loadJson } from "../json-loader";

import { FieldDefinition } from "../../models/field";

export function loadFields(
  entity: string
): FieldDefinition[] {

  return loadJson<FieldDefinition[]>(
    `catalog/fields/${entity}-fields.json`
  );

}