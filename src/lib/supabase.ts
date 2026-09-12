import { createClient } from "@supabase/supabase-js";
import { Company } from "../types/company";

   export const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL!,
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
   );


// Mapping minimal id → libellé, le temps de brancher le vrai vocabulaire plus tard
const SECTOR_LABELS: Record<string, string> = {
  "agriculture-and-food": "Agriculture et Agroalimentaire",
  "aerospace": "Aéronautique",
  "automotive": "Automobile",
  "wood-industry": "Bois",
  "chemicals-and-materials": "Chimie et Matériaux",
  "construction": "Construction",
  "defense-and-security": "Défense & Sécurité",
  "water": "Eau",
  "rail": "Ferroviaire",
  "digital-infrastructure": "Infrastructures numériques",
  "naval": "Naval",
  "mining-and-metallurgy": "Mines et Métallurgie",
  "energy": "Énergie",
  "nuclear": "Nucléaire",
  "healthcare": "Santé",
  "waste-management": "Transformation et Valorisation des Déchets",
  "space": "Spatial"
};

const GEO_ZONE_LABELS: Record<string, string> = {
  "africa": "Afrique",
  "middle-east": "Moyen-Orient",
  "asia": "Asie",
  "europe": "Europe",
  "americas": "Amériques",
  "oceania": "Océanie"
};

const CHAIN_POSITION_LABELS: Record<string, string> = {
  "prime-contractor": "Maître d'œuvre / Donneur d'ordre",
  "tier-1-supplier": "Fournisseur de rang 1",
  "tier-2-supplier": "Fournisseur de rang 2 et plus",
  "raw-material-supplier": "Fournisseur de matières premières",
  "component-manufacturer": "Fabricant de composants",
  "system-integrator": "Intégrateur de systèmes",
  "service-provider": "Prestataire de services techniques"
};

const HEADCOUNT_LABELS: Record<string, string> = {
  "1-9": "1 à 9 salariés",
  "10-49": "10 à 49 salariés",
  "50-249": "50 à 249 salariés",
  "250-999": "250 à 999 salariés",
  "1000-4999": "1 000 à 4 999 salariés",
  "5000-plus": "5 000 salariés et plus"
};

;

function estimateHeadcount(range: string | null): number {
  if (!range) return 0;
  const parts = range.split("-").map(Number);
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    return Math.round((parts[0] + parts[1]) / 2);
  }
  return 0;
}

function estimateExportExperience(
  exportRevenueShare: number | null,
  internationalExperience: boolean | null
): "Faible" | "Moyenne" | "Élevée" {
  if (exportRevenueShare !== null) {
    if (exportRevenueShare >= 30) return "Élevée";
    if (exportRevenueShare >= 10) return "Moyenne";
    return "Faible";
  }
  return internationalExperience ? "Moyenne" : "Faible";
}

function mapRowToCompany(row: Record<string, any>): Company {
  return {
    id: row.id,
    name: row.name,
    logo: "",
    headquarters: [row.headquarters_address, row.headquarters_country]
      .filter(Boolean)
      .join(", "),
    website: row.website ?? "",
    description: row.short_description ?? row.detailed_description ?? "",
    sectors: (row.primary_sectors ?? []).map((s: string) => SECTOR_LABELS[s] ?? s),
    geographicZones: (row.geographic_zones ?? []).map((z: string) => GEO_ZONE_LABELS[z] ?? z),
supplyChainPosition: (row.supply_chain_position ?? []).map((p: string) => CHAIN_POSITION_LABELS[p] ?? p),
headcountRange: HEADCOUNT_LABELS[row.headcount_range] ?? row.headcount_range ?? undefined,
    capabilities: row.key_capabilities ?? [],
    countries: row.export_countries ?? [],
    references: [],
    exportRevenueSharePercent: row.export_revenue_share ?? undefined,
    certifications: row.certifications ?? [],
    employees: estimateHeadcount(row.headcount_range),
    turnover: row.annual_revenue ?? 0,
    exportExperience: estimateExportExperience(row.export_revenue_share, row.international_experience),
    contact: {
      name: row.contact_name ?? "",
      email: row.contact_email ?? "",
      phone: row.contact_phone ?? ""
    },
    frenchPotentialScore: 0,
    strategicPartner: false,
    lastUpdated: row.last_updated
  };
}

export async function getCompanies(): Promise<Company[]> {
  const { data, error } = await supabase
    .from("companies")
    .select("*")
    .order("name");

  if (error || !data) {
    console.error("Erreur de chargement des entreprises :", error);
    return [];
  }

  return data.map(mapRowToCompany);
}

export async function getCompanyById(id: string): Promise<Company | null> {
  const { data, error } = await supabase
    .from("companies")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) return null;

  return mapRowToCompany(data);
}