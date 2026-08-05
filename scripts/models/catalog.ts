import { EvaluationModel } from "./score-model";
import { FieldDefinition } from "./field";
import { Source } from "./source";
import { ConnectorDefinition } from "./connector";
import { Vocabulary } from "./vocabulary";

export interface Catalog {

  fields: FieldDefinition[];

  connectorFields: FieldDefinition[];

  evaluation: EvaluationModel;

  vocabularies: Record<string, Vocabulary>;

  sources: Record<string, Source>;

  connectors: Record<string, ConnectorDefinition>;

}