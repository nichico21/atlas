import { crawl } from "../../engine/crawler/crawler";
import { generate } from "../../engine/llm/openai-provider";
import { executeSpecialist } from "../../engine/specialist/specialist-engine";
import { buildCompanyFinderListSchema } from "./schema-builder";
import { loadFields } from "./loaders/field-loader";
import { normalizeSiren } from "./normalize-siren";
import {
  IdentityIndex,
  resolveCompanyIdentity,
  registerContribution
} from "./company-identity";
import { mergeProvenance, resolveCompany } from "./resolve-company";
import { writeWorkspaceFile } from "../../engine/workspace/workspace-writer";
import { loadExistingJson } from "./load-existing-json";
import { CompanyProvenance } from "../models/company-provenance";


export const SELF_DECLARED_SOURCE_ID = "self-declared";
export const SELF_DECLARED_RELIABILITY = 9;

export async function handleExternalJump(
  jump: { companyName: string; url: string },
  identityIndex: IdentityIndex
): Promise<void> {

  console.log(`  ↳ Saut externe : ${jump.companyName} (${jump.url})`);

  let crawled;
try {
  crawled = await crawl(jump.url);
} catch (error) {
  console.log(`    ⚠ Échec du crawl externe : ${error}`);
  throw error;
}

  const specialist = await executeSpecialist("company-finder", {
    id: "crawled-content",
    content: crawled.content
  });

  const schema = buildCompanyFinderListSchema();

  const result = await generate(specialist.prompt, {
    name: "atlas_company_finder_output",
    schema
  });

  const parsed = JSON.parse(result) as { companies: Record<string, unknown>[] };

  const companyFields = loadFields("company");

  for (const extracted of parsed.companies) {

    const explicitFields = (extracted.explicitFields as string[]) ?? [];
    const rawName = (extracted.name as string) ?? jump.companyName;
    const siren = normalizeSiren(extracted.siren as string | undefined);

    const resolution = resolveCompanyIdentity(rawName, siren, identityIndex);
    registerContribution(identityIndex, resolution.companyId, rawName, siren);

    const existingProvenance = loadExistingJson<CompanyProvenance>(resolution.companyId, ".provenance.json");

    const extractionForMerge: Record<string, unknown> = { ...extracted };
    delete extractionForMerge.explicitFields;

    const updatedProvenance = mergeProvenance(
      existingProvenance,
      resolution.companyId,
      extractionForMerge,
      explicitFields,
      SELF_DECLARED_SOURCE_ID,
      SELF_DECLARED_RELIABILITY
    );

    const resolvedCompany = resolveCompany(updatedProvenance, companyFields);

    const existingResolved = loadExistingJson<Record<string, unknown>>(resolution.companyId, ".json");
    resolvedCompany.completionStatus = existingResolved?.completionStatus ?? "ai-draft";

    writeWorkspaceFile("companies", `${resolution.companyId}.json`, JSON.stringify(resolvedCompany, null, 2));
    writeWorkspaceFile("companies", `${resolution.companyId}.provenance.json`, JSON.stringify(updatedProvenance, null, 2));

    console.log(`    ✓ Enrichi via saut externe : ${resolution.companyId}`);
  }
}