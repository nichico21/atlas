import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { createClient } from "@supabase/supabase-js";
import { loadCatalog } from "./lib/loaders/catalog-loader";
import { validateCatalog } from "./lib/validation/validation-engine";
import { Company } from "./models/company";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

function mapCompanyToRow(company: Company): Record<string, unknown> {
  return {
    id: company.id,
    name: company.name,
    commercial_name: company.commercialName ?? null,
    siren: company.siren ?? null,
    naf_code: company.nafCode ?? null,
    founding_year: company.foundingYear ?? null,
    website: company.website ?? null,
    linkedin: company.linkedin ?? null,
    short_description: company.shortDescription,
    detailed_description: company.detailedDescription ?? null,
    headcount_range: company.headcountRange ?? null,
    revenue_range: company.revenueRange ?? null,
    annual_revenue: company.annualRevenue ?? null,
    primary_sectors: company.primarySectors ?? [],
    sub_sectors: company.subSectors ?? [],
    offer_type: company.offerType ?? [],
    key_capabilities: company.keyCapabilities ?? [],
    supply_chain_position: company.supplyChainPosition ?? [],
    international_experience: company.internationalExperience ?? null,
    consortium_capacity: company.consortiumCapacity ?? null,
    export_countries: company.exportCountries ?? [],
    export_revenue_share: company.exportRevenueShare ?? null,
    geographic_zones: company.geographicZones ?? [],
    working_languages: company.workingLanguages ?? [],
    certifications: company.certifications ?? [],
    labels: company.labels ?? [],
    value_proposition: company.valueProposition ?? null,
    contact_name: company.contactName ?? null,
    contact_email: company.contactEmail ?? null,
    contact_phone: company.contactPhone ?? null,
    headquarters_country: company.headquartersCountry ?? null,
    headquarters_address: company.headquartersAddress ?? null,
    source_url: company.sourceUrl,
    source_id: company.sourceId,
    source_ids: company.sourceIds ?? [],
    completion_status: company.completionStatus,
    last_updated: company.lastUpdated
  };
}

async function main(): Promise<void> {

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.error("SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY doivent être définis dans .env.local");
    process.exit(1);
  }

  console.log("Chargement du catalogue...");
  const catalog = loadCatalog();

  console.log("Validation...");
  const validation = validateCatalog(catalog);
  const companyIssues = validation.issues.filter(i => i.entity === "company");

  if (companyIssues.length > 0) {
    console.error(`${companyIssues.length} issue(s) de validation — synchronisation annulée.`);
    for (const issue of companyIssues) {
      console.error(`  [${issue.level}] ${issue.entityId} (${issue.fieldId}) — ${issue.message}`);
    }
    process.exit(1);
  }

  const supabase = createClient(url, key);
  const companies = Object.values(catalog.companies);

  console.log(`Synchronisation de ${companies.length} entreprise(s)...`);

  const rows = companies.map(mapCompanyToRow);

  const { error, count } = await supabase
    .from("companies")
    .upsert(rows, { onConflict: "id", count: "exact" });

  if (error) {
    console.error("Erreur Supabase :", error.message);
    process.exit(1);
  }

  console.log(`✓ ${count ?? rows.length} entreprise(s) synchronisée(s).`);
}

main();

