import { crawl } from "../engine/crawler/crawler";
import { generate } from "../engine/llm/openai-provider";
import { executeSpecialist } from "../engine/specialist/specialist-engine";
import { buildCompanyFinderListSchema } from "./lib/schema-builder";
import { writeWorkspaceFile } from "../engine/workspace/workspace-writer";
import { loadFields } from "./lib/loaders/field-loader";
import { loadSource } from "./lib/loaders/source-loader";
import { loadConnector } from "./lib/loaders/connector-loader";
import { normalizeSiren } from "./lib/normalize-siren";
import {
  loadIdentityIndex,
  saveIdentityIndex,
  resolveCompanyIdentity,
  registerContribution,
  IdentityIndex
} from "./lib/company-identity";
import { mergeProvenance, resolveCompany } from "./lib/resolve-company";
import { CompanyProvenance } from "./models/company-provenance";
import { loadExistingJson } from "./lib/load-existing-json";
import { handleExternalJump } from "./lib/external-jump";

const MAX_DETAIL_LINKS_PER_PAGE = 20;

function stripFragment(url: string): string {
  return url.split("#")[0];
}

interface RunStats {
  pagesVisited: number;
  companiesDetected: number;
  newFiches: number;
  enrichedFiches: number;
  externalJumpsSucceeded: number;
  externalJumpsFailed: number;
}

function createRunStats(): RunStats {
  return {
    pagesVisited: 0,
    companiesDetected: 0,
    newFiches: 0,
    enrichedFiches: 0,
    externalJumpsSucceeded: 0,
    externalJumpsFailed: 0
  };
}

async function processPage(
  rawUrl: string,
  sourceId: string,
  sourceReliability: number,
  maxDepth: number,
  followInternalLinks: boolean,
  currentDepth: number,
  identityIndex: IdentityIndex,
  visitedUrls: Set<string>,
  stats: RunStats
): Promise<void> {

  const url = stripFragment(rawUrl);

  if (visitedUrls.has(url)) {
    console.log(`  (déjà visité, ${url} ignoré)`);
    return;
  }
  visitedUrls.add(url);

  if (currentDepth > maxDepth) {
    console.log(`  (profondeur maximale atteinte, ${url} ignoré)`);
    return;
  }

  console.log(`Crawl de ${url} (profondeur ${currentDepth})...`);
  stats.pagesVisited++;
  const crawled = await crawl(url);

  const linksSection = crawled.links.length > 0
    ? `\n\n## Liens disponibles sur cette page\n${crawled.links.map(l => `- [${l.text}](${l.url})`).join("\n")}`
    : "";

  const specialist = await executeSpecialist("company-finder", {
    id: "crawled-content",
    content: `${crawled.content}${linksSection}`
  });

  const schema = buildCompanyFinderListSchema();

  console.log("  Génération en cours...");
  const result = await generate(specialist.prompt, {
    name: "atlas_company_finder_output",
    schema
  });

  const parsed = JSON.parse(result) as {
    companies: Record<string, unknown>[];
    detailLinksToFollow: { url: string; reason: string }[];
    externalWebsiteJumps: { companyName: string; url: string }[];
  };

  console.log(`  ${parsed.companies.length} entreprise(s) identifiée(s) sur cette page.`);

  const companyFields = loadFields("company");

  for (const extracted of parsed.companies) {

    stats.companiesDetected++;

    const explicitFields = (extracted.explicitFields as string[]) ?? [];
    const rawName = extracted.name as string;
    const siren = normalizeSiren(extracted.siren as string | undefined);

    const resolution = resolveCompanyIdentity(rawName, siren, identityIndex);
    registerContribution(identityIndex, resolution.companyId, rawName, siren);

    if (resolution.isNew) {
      stats.newFiches++;
    } else {
      stats.enrichedFiches++;
    }

    console.log(
      `    → ${rawName} : ${resolution.isNew ? "nouvelle fiche" : "fiche existante"} ` +
      `(${resolution.companyId}, résolu par ${resolution.matchedBy})`
    );

    const existingProvenance = loadExistingJson<CompanyProvenance>(resolution.companyId, ".provenance.json");

    const extractionForMerge: Record<string, unknown> = { ...extracted };
    delete extractionForMerge.explicitFields;

    const updatedProvenance = mergeProvenance(
      existingProvenance,
      resolution.companyId,
      extractionForMerge,
      explicitFields,
      sourceId,
      sourceReliability
    );

    const resolvedCompany = resolveCompany(updatedProvenance, companyFields);

    const existingResolved = loadExistingJson<Record<string, unknown>>(resolution.companyId, ".json");
    resolvedCompany.completionStatus = existingResolved?.completionStatus ?? "ai-draft";
    resolvedCompany.sourceId = sourceId;
    resolvedCompany.sourceUrl = url;

    writeWorkspaceFile("companies", `${resolution.companyId}.json`, JSON.stringify(resolvedCompany, null, 2));
    writeWorkspaceFile("companies", `${resolution.companyId}.provenance.json`, JSON.stringify(updatedProvenance, null, 2));

    console.log(`      ✓ Écrit dans 0_workspace/companies/${resolution.companyId}.json`);

    saveIdentityIndex(identityIndex);
  }

  if (followInternalLinks && currentDepth < maxDepth) {
    const linksToFollow = parsed.detailLinksToFollow.slice(0, MAX_DETAIL_LINKS_PER_PAGE);

    if (parsed.detailLinksToFollow.length > MAX_DETAIL_LINKS_PER_PAGE) {
      console.log(`  ⚠ ${parsed.detailLinksToFollow.length} liens proposés, seuls les ${MAX_DETAIL_LINKS_PER_PAGE} premiers sont suivis.`);
    }

    for (const link of linksToFollow) {
      await processPage(
        link.url,
        sourceId,
        sourceReliability,
        maxDepth,
        followInternalLinks,
        currentDepth + 1,
        identityIndex,
        visitedUrls,
        stats
      );
    }
  }

  for (const jump of parsed.externalWebsiteJumps) {
    try {
      await handleExternalJump(jump, identityIndex);
      stats.externalJumpsSucceeded++;
    } catch {
      stats.externalJumpsFailed++;
    }
  }
}

async function main(): Promise<void> {

  const sourceId = process.argv[2];
  const url = process.argv[3];

  if (!sourceId || !url) {
    console.error("Usage: npm run company-finder -- <source-id> <url>");
    process.exit(1);
  }

  try {

    console.log(`Chargement de la source ${sourceId}...`);
    const source = loadSource(sourceId);
    const sourceReliability = source.evaluation.reliability;

    const connectorId = `${sourceId}-website`;
    console.log(`Chargement du connecteur ${connectorId}...`);
    const connector = loadConnector(connectorId);

    const identityIndex = loadIdentityIndex();
    const visitedUrls = new Set<string>();
    const stats = createRunStats();

    await processPage(
      url,
      sourceId,
      sourceReliability,
      connector.maxDepth,
      connector.followInternalLinks,
      1,
      identityIndex,
      visitedUrls,
      stats
    );

    saveIdentityIndex(identityIndex);

    console.log();
    console.log("=================================");
    console.log("Bilan de l'exécution");
    console.log("=================================");
    console.log(`Pages visitées         : ${stats.pagesVisited}`);
    console.log(`Entreprises détectées   : ${stats.companiesDetected}`);
    console.log(`  dont nouvelles fiches : ${stats.newFiches}`);
    console.log(`  dont fiches enrichies : ${stats.enrichedFiches}`);
    console.log(`Sauts externes réussis  : ${stats.externalJumpsSucceeded}`);
    console.log(`Sauts externes échoués  : ${stats.externalJumpsFailed}`);
    console.log();
    console.log("Terminé.");

  } catch (error) {
    console.error("Execution failed.");
    console.error(error);
    process.exit(1);
  }
}

main();