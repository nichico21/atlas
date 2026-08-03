import { loadFields } from "../lib/loaders/field-loader";
import { loadVocabularies } from "../lib/loaders/vocabulary-loader";
import { loadSources } from "../lib/loaders/source-loader";
import { loadEvaluationModel } from "../lib/loaders/evaluation-loader";

console.log("=================================");
console.log("       Atlas Loader Test");
console.log("=================================\n");

// ----------------------
// Fields
// ----------------------

console.log("Loading fields...");

const fields = loadFields("source");

console.log(`✓ ${fields.length} fields loaded\n`);

// ----------------------
// Vocabularies
// ----------------------

console.log("Loading vocabularies...");

const vocabularies = loadVocabularies();

const vocabularyCount =
  Object.keys(vocabularies).length;

const vocabularyValuesCount =
  Object.values(vocabularies)
    .reduce(
      (count, vocabulary) =>
        count + vocabulary.values.length,
      0
    );

console.log(
  `✓ ${vocabularyCount} vocabularies loaded`
);

console.log(
  `✓ ${vocabularyValuesCount} vocabulary values loaded\n`
);

// ----------------------
// Evaluation
// ----------------------

console.log("Loading evaluation model...");

const evaluation =
  loadEvaluationModel();

const criteriaCount =
  evaluation.criteria.length;

console.log(
  `✓ ${criteriaCount} criteria loaded\n`
);

// ----------------------
// Sources
// ----------------------

console.log("Loading sources...");

const sources =
  loadSources();

const sourceCount =
  Object.keys(sources).length;

console.log(
  `✓ ${sourceCount} sources loaded\n`
);

// ----------------------
// Summary
// ----------------------

console.log("=================================");
console.log("Catalog summary\n");

console.log(
  `Fields        : ${fields.length}`
);

console.log(
  `Vocabularies  : ${vocabularyCount}`
);

console.log(
  `Values        : ${vocabularyValuesCount}`
);

console.log(
  `Sources       : ${sourceCount}`
);

console.log(
  `Criteria      : ${criteriaCount}`
);

console.log("\n=================================");
console.log("✓ All loaders succeeded");
console.log("=================================");