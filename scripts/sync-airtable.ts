import { loadCatalog } from "./lib/loaders/catalog-loader";
import { runValidations } from "./lib/validation/validation-engine";
import { mapSourceToAirtable } from "./lib/airtable-mapper";
import { previewRecords } from "./lib/airtable-preview";

async function main() {

    console.log("Atlas Airtable Preview");
    console.log();

    console.log("Loading catalog...");

    const result = loadCatalog("./catalog");
    const catalog = result.catalog;

    console.log("Running validations...");

    const validation = runValidations(catalog);

    if (validation.errors.length > 0) {

        console.error();

        console.error("Validation failed:");

        validation.errors.forEach((error) =>
            console.error(`- ${error}`)
        );

        process.exit(1);

    }

    console.log("Generating Airtable records...");

    const records = Object
        .values(catalog.sources)
        .map(mapSourceToAirtable);

    previewRecords(records);

}

main().catch(console.error);