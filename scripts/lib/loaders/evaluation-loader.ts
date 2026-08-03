import { loadJson } from "../json-loader";

import { EvaluationModel } from "../../models/score-model";

export function loadEvaluationModel(): EvaluationModel {

  return loadJson<EvaluationModel>(
    "catalog/evaluation/score-model.json"
  );

}