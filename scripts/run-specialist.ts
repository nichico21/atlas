import { executeSpecialist } from "../engine/specialist/specialist-engine";

async function main(): Promise<void> {

  const specialistId = process.argv[2];

  if (!specialistId) {

    console.error();

    console.error("Usage:");

    console.error();

    console.error(
      "npm run specialist -- <specialist-id>"
    );

    console.error();

    process.exit(1);

  }

  try {

    const specialist = await executeSpecialist(

      specialistId

    );

    console.log("=================================");
    console.log("Prompt");
    console.log("=================================");
    console.log();

    console.log(
      specialist.prompt
    );

  } catch (error) {

    console.error();

    console.error("Execution failed.");

    console.error();

    console.error(error);

    process.exit(1);

  }

}

main();