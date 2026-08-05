import { crawl } from "../engine/crawler/crawler";
import { generate } from "../engine/llm/openai-provider";
import { executeSpecialist } from "../engine/specialist/specialist-engine";
import { buildSourceCartographerSchema } from "../engine/specialist/schemas";
import { computeSourceId, computeConnectorId } from "../scripts/lib/compute-fields";
import { writeWorkspaceFile } from "../engine/workspace/workspace-writer";
import {
  slugify,
  computeFsipScore,
  computeConnectorLabel
} from "../scripts/lib/compute-fields";


async function main(): Promise<void> {
  const specialistId = process.argv[2];
  const url = process.argv[3];

  if (!specialistId || !url) {
    console.error("Usage: npm run specialist -- <specialist-id> <url>");
    process.exit(1);
  }

  try {
    const crawled = await crawl(url);

    const specialist = await executeSpecialist(specialistId, {
      id: "crawled-content",
      content: crawled.content
    });

    const schema = buildSourceCartographerSchema();

    console.log("Génération en cours...");
    const result = await generate(specialist.prompt, {
      name: "atlas_source_cartographer_output",
      schema
    });

    const parsed = JSON.parse(result);

const sourceId = computeSourceId(parsed.source);
const fsipScore = computeFsipScore(parsed.source);

const connectorId = computeConnectorId(sourceId, parsed.connector.primaryAccessMethod);
const connectorLabel = computeConnectorLabel(parsed.source.name, parsed.connector.primaryAccessMethod);

const finalSource = { id: sourceId, ...parsed.source, fsipScore };
const finalConnector = { id: connectorId, label: connectorLabel, ...parsed.connector };

writeWorkspaceFile("sources", `${sourceId}.json`, JSON.stringify(finalSource, null, 2));
writeWorkspaceFile("connectors", `${connectorId}.json`, JSON.stringify(finalConnector, null, 2));

console.log(`✓ Écrit dans workspace/sources/${sourceId}.json (fsipScore: ${fsipScore}/100)`);
console.log(`✓ Écrit dans workspace/connectors/${connectorId}.json`);


    console.log("=================================");
    console.log("Résultat");
    console.log("=================================");
    console.log(JSON.stringify({ source: finalSource, connector: finalConnector }, null, 2));

  } catch (error) {
    console.error("Execution failed.");
    console.error(error);
    process.exit(1);
  }
}

main();