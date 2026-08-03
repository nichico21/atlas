import { EvaluationModel } from "./score-model";
import { FieldDefinition } from "./field";
import { Source } from "./source";
import { Vocabulary } from "./vocabulary";

export interface Catalog {

  fields: FieldDefinition[];

  evaluation: EvaluationModel;

  vocabularies: Record<string, Vocabulary>;

  sources: Record<string, Source>;

}