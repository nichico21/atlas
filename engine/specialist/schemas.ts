import { buildSchemaFromFields } from "../../scripts/lib/schema-builder";

export function buildSourceCartographerSchema() {
  const sourceSchema = buildSchemaFromFields("catalog/fields/source-fields.json");
  const connectorSchema = buildSchemaFromFields("catalog/fields/connector-fields.json");

  return {
    type: "object",
    properties: {
      source: sourceSchema,
      connector: connectorSchema
    },
    required: ["source", "connector"],
    additionalProperties: false
  };
}