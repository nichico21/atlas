import { Catalog } from "../../models/catalog";

import {
  ValidationIssue,
  ValidationResult
} from "../../models/validation";

export function printValidationReport(

  catalog: Catalog,

  validation: ValidationResult

): void {

  const sourceIds = Object.keys(catalog.sources);

  const invalidSourceIds = new Set(

    validation.issues

      .map(issue => issue.entityId)

      .filter(
        (id): id is string => id !== undefined
      )

  );

  const totalSources = sourceIds.length;

  const invalidSources = invalidSourceIds.size;

  const validSources =
    totalSources - invalidSources;

  console.log("=================================");
  console.log("Atlas Catalog Validation Report");
  console.log("=================================\n");

  console.log(`Sources analysées : ${totalSources}\n`);

  console.log(`✓ Valides   : ${validSources}`);
  console.log(`❌ Invalides : ${invalidSources}\n`);

  printRanking(
    "Top des sources à corriger",
    countBy(
      validation.issues,
      issue => issue.entityId
    )
  );

  printRanking(
    "Top des champs",
    countBy(
      validation.issues,
      issue => issue.fieldId
    )
  );

  printRanking(
    "Top des erreurs",
    countBy(
      validation.issues,
      issue => issue.code
    )
  );

  printRanking(
    "Répartition",
    countBy(
      validation.issues,
      issue => issue.level
    )
  );

  console.log("---------------------------------\n");

  console.log(
    `Total : ${validation.issues.length} issue${validation.issues.length > 1 ? "s" : ""}\n`
  );

  console.log("---------------------------------\n");

  for (const issue of validation.issues) {

    console.log(issue.level.toUpperCase());

    console.log(issue.code);

    console.log();

    console.log(`Entity : ${issue.entity}`);

    if (issue.entityId) {

      console.log(`Source : ${issue.entityId}`);

    }

    if (issue.fieldId) {

      console.log(`Field : ${issue.fieldId}`);

    }

    if (issue.value !== undefined) {

      console.log(`Current value : ${issue.value}`);

    }

    if (issue.expectedType) {

      console.log(`Expected type : ${issue.expectedType}`);

    }

    if (issue.allowedValues) {

      console.log(
        `Allowed values : ${issue.allowedValues.join(", ")}`
      );

    }

    console.log();

    console.log(issue.message);

    if (issue.suggestion) {

      console.log();

      console.log("Suggestion :");

      console.log(issue.suggestion);

    }

    console.log("\n---------------------------------\n");

  }

}

function printRanking(

  title: string,

  values: Map<string, number>

): void {

  console.log(title);

  console.log();

  const ranking =

    [...values.entries()]

      .sort((a, b) => b[1] - a[1]);

  if (ranking.length === 0) {

    console.log("Aucun.\n");

    return;

  }

  ranking.forEach(

    ([name, count], index) => {

      console.log(

        `${String(index + 1).padStart(2)}. ` +

        `${name.padEnd(30, ".")} ` +

        `${count} issue${count > 1 ? "s" : ""}`

      );

    }

  );

  console.log();

}

function countBy(

  issues: ValidationIssue[],

  selector: (
    issue: ValidationIssue
  ) => string | undefined

): Map<string, number> {

  const counts =
    new Map<string, number>();

  for (const issue of issues) {

    const key =
      selector(issue);

    if (!key) {

      continue;

    }

    counts.set(

      key,

      (counts.get(key) ?? 0) + 1

    );

  }

  return counts;

}