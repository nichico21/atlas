import { Catalog } from "../../models/catalog";

import { loadEvaluationModel } from "./evaluation-loader";
import { loadFields } from "./field-loader";
import { loadSources } from "./source-loader";
import { loadConnectors } from "./connector-loader";
import { loadVocabularies } from "./vocabulary-loader";

export function loadCatalog(): Catalog {

  return {

    fields: loadFields("source"),

    connectorFields: loadFields("connector"),

    evaluation: loadEvaluationModel(),

    vocabularies: loadVocabularies(),

    sources: loadSources(),

    connectors: loadConnectors()

  };

}