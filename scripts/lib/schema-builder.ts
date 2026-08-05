import fs from "fs";
import path from "path";
import scoreModel from "../../catalog/evaluation/score-model.json";
import { FieldDefinition } from "../models/field"

interface ScoreLevel { score: number; description: string }
interface ScoreCriterion { id: string; levels: ScoreLevel[] }

function findScoreCriterion(fieldId: string): ScoreCriterion | undefined {
  return (scoreModel as { criteria: ScoreCriterion[] }).criteria.find(
    (c) => c.id === fieldId
  );
}

function loadVocabulary(name: string): string[] {
  const filePath = path.join(
    process.cwd(),
    "catalog/vocabularies",
    `${name}.json`
  );
  const raw = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return raw.values.map((v: { id: string }) => v.id);
}

function fieldToBaseSchema(field: FieldDefinition): Record<string, unknown> | null {
  if (field.computed) return null;

  const ref = field.valueSource ?? field.valueSource;

  switch (field.type) {
    case "text":
    case "long-text":
      return { type: "string", description: field.description ?? "" };

    case "url":
      return { type: "string", description: field.description ?? "URL complète, incluant le protocole (https://...)" };

    case "number":
    case "rating": {
      const criterion = findScoreCriterion(field.id);
      if (criterion) {
        return {
          type: "number",
          enum: criterion.levels.map((l) => l.score),
          description: criterion.levels
            .map((l) => `${l.score} : ${l.description}`)
            .join(" | ")
        };
      }
      return { type: "number" };
    };

    case "boolean":
      return { type: "boolean" };

    case "date":
      return { type: "string", description: "Date au format ISO 8601 (AAAA-MM-JJ)" };

    case "single-select":
      if (ref?.type === "vocabulary") {
        return { type: "string", enum: loadVocabulary(ref.name) };
      }
      return { type: "string" };

    case "multi-select":
      if (ref?.type === "vocabulary") {
        return {
          type: "array",
          items: { type: "string", enum: loadVocabulary(ref.name) }
        };
      }
      return { type: "array", items: { type: "string" } };

    default:
      return { type: "string" };
  }
}

function fieldToJsonSchema(field: FieldDefinition): Record<string, unknown> | null {
  const base = fieldToBaseSchema(field);
  if (!base) return null;

  if (!field.required) {
    // Le mode strict d'OpenAI exige que TOUS les champs de "properties"
    // figurent dans "required" — pour un champ optionnel au sens métier,
    // on autorise donc explicitement null plutôt que de l'omettre.
    const baseType = base.type;
    return { ...base, type: Array.isArray(baseType) ? baseType : [baseType, "null"] };
  }

  return base;
}

export function buildSchemaFromFields(
  fieldsFilePath: string
): { type: "object"; properties: Record<string, unknown>; required: string[]; additionalProperties: false } {

  const allFields: FieldDefinition[] = JSON.parse(
  fs.readFileSync(fieldsFilePath, "utf8")
);

const fields = allFields.filter(field => field.aiFillable !== false);

  const rootProperties: Record<string, unknown> = {};
  const rootRequired: string[] = [];

  const groups: Record<string, { properties: Record<string, unknown>; required: string[] }> = {};

  for (const field of fields) {
    const schema = fieldToJsonSchema(field);
    if (!schema) continue; // champ calculé, exclu

    if (field.parent) {
      if (!groups[field.parent]) {
        groups[field.parent] = { properties: {}, required: [] };
      }
      groups[field.parent].properties[field.id] = schema;
      groups[field.parent].required.push(field.id);
    } else {
      rootProperties[field.id] = schema;
      rootRequired.push(field.id);
    }
  }

  // Chaque groupe (ex: "evaluation") devient un sous-objet imbriqué
  for (const [groupName, group] of Object.entries(groups)) {
    rootProperties[groupName] = {
      type: "object",
      properties: group.properties,
      required: group.required,
      additionalProperties: false
    };
    rootRequired.push(groupName);
  }

  return {
    type: "object",
    properties: rootProperties,
    required: rootRequired,
    additionalProperties: false
  };
}

export function buildCompanyFinderSchema(): Record<string, unknown> {

  const schema = buildSchemaFromFields("catalog/fields/company-fields.json");

  return {
    ...schema,
    properties: {
      ...schema.properties,
      explicitFields: {
        type: "array",
        items: { type: "string" },
        description: "Liste des id de champs remplis dont l'information était explicitement écrite dans le contenu source, par opposition à déduite ou inférée par toi."
      }
    },
    required: [...schema.required, "explicitFields"]
  };
}

export function buildCompanyFinderListSchema(): Record<string, unknown> {
  const singleCompanySchema = buildCompanyFinderSchema();

  return {
    type: "object",
    properties: {
      companies: {
        type: "array",
        items: singleCompanySchema
      },
      detailLinksToFollow: {
        type: "array",
        items: {
          type: "object",
          properties: {
            url: { type: "string" },
            reason: { type: "string" }
          },
          required: ["url", "reason"],
          additionalProperties: false
        },
        description: "Liens internes au site source menant vers une fiche détaillée d'une entreprise déjà repérée mais insuffisamment décrite dans ce contenu."
      },
      externalWebsiteJumps: {
        type: "array",
        items: {
          type: "object",
          properties: {
            companyName: { type: "string" },
            url: { type: "string" }
          },
          required: ["companyName", "url"],
          additionalProperties: false
        },
        description: "Sites web propres d'entreprises identifiées, hors du domaine de la source, à visiter pour compléter leur fiche."
      }
    },
    required: ["companies", "detailLinksToFollow", "externalWebsiteJumps"],
    additionalProperties: false
  };
}