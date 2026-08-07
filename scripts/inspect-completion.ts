import { banner, success, error } from "./lib/logger";
import { loadFields } from "./lib/loaders/field-loader";
import { loadCompanies } from "./lib/loaders/company-loader";
import { computeCompletion } from "./lib/completion-score";

const LOW_COMPLETION_THRESHOLD = 0.4;

banner("Atlas Completion Inspector");

const companies = loadCompanies();
const fields = loadFields("company");

const results = Object.values(companies)
  .map(company => computeCompletion(company as Record<string, unknown>, fields))
  .sort((a, b) => a.score - b.score);

console.log(`${results.length} fiche(s) entreprise analysée(s).`);
console.log();

const lowCompletion = results.filter(r => r.score < LOW_COMPLETION_THRESHOLD);

if (lowCompletion.length === 0) {
  success("Aucune fiche sous le seuil de complétion.");
} else {
  error(`${lowCompletion.length} fiche(s) sous ${LOW_COMPLETION_THRESHOLD * 100}% de complétion :`);
  console.log();
  for (const r of lowCompletion) {
    console.log(`  ${r.companyId} — ${Math.round(r.score * 100)}% (${r.filledCount}/${r.totalCount})`);
    if (r.missingRequiredFields.length > 0) {
      console.log(`    Champs obligatoires manquants : ${r.missingRequiredFields.join(", ")}`);
    }
  }
}