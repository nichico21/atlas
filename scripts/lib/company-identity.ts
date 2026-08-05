import fs from "fs";
import path from "path";

const LEGAL_FORM_PATTERN = /\b(sas|sa|sarl|sasu|eurl|sci|sca|snc)\b/g;

export function normalizeCompanyName(raw: string): string {
  return raw
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(LEGAL_FORM_PATTERN, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export interface IdentityIndexEntry {
  companyId: string;
  siren: string | null;
  normalizedAliases: string[];
}

export type IdentityIndex = Record<string, IdentityIndexEntry>;
// clé = companyId (siren si connu, sinon slug du nom)

const INDEX_PATH = path.join(process.cwd(), "catalog/companies/_identity-index.json");

export function loadIdentityIndex(): IdentityIndex {
  if (!fs.existsSync(INDEX_PATH)) return {};
  return JSON.parse(fs.readFileSync(INDEX_PATH, "utf8"));
}

export function saveIdentityIndex(index: IdentityIndex): void {
  fs.mkdirSync(path.dirname(INDEX_PATH), { recursive: true });
  fs.writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2), "utf8");
}

export interface ResolutionResult {
  companyId: string;
  isNew: boolean;
  matchedBy: "siren" | "alias" | "none";
}

/**
 * Résout l'identité d'une entreprise nouvellement extraite face à l'index existant.
 * Ne modifie pas l'index — c'est à l'appelant de le faire après coup via registerContribution,
 * pour garder cette fonction prévisible et testable isolément.
 */
export function resolveCompanyIdentity(
  rawName: string,
  siren: string | null,
  index: IdentityIndex
): ResolutionResult {

  // Cas 1 & 2 : SIREN présent
  if (siren) {
    if (index[siren]) {
      return { companyId: siren, isNew: false, matchedBy: "siren" };
    }
    return { companyId: siren, isNew: true, matchedBy: "none" };
  }

  // Cas 3 : pas de SIREN, recherche par alias normalisé
  const normalized = normalizeCompanyName(rawName);

  for (const [companyId, entry] of Object.entries(index)) {
    if (entry.normalizedAliases.includes(normalized)) {
      return { companyId, isNew: false, matchedBy: "alias" };
    }
  }

  // Cas 4 : aucune correspondance, nouvelle fiche identifiée par le nom
  const slug = normalized.replace(/\s+/g, "-");
  return { companyId: slug, isNew: true, matchedBy: "none" };
}

/**
 * Met à jour l'index après résolution : ajoute l'alias rencontré,
 * et enregistre le SIREN s'il vient d'être découvert pour une fiche déjà connue.
 */
export function registerContribution(
  index: IdentityIndex,
  companyId: string,
  rawName: string,
  siren: string | null
): IdentityIndex {

  const normalized = normalizeCompanyName(rawName);

  if (!index[companyId]) {
    index[companyId] = { companyId, siren: siren ?? null, normalizedAliases: [] };
  }

  if (siren && !index[companyId].siren) {
    index[companyId].siren = siren;
  }

  if (!index[companyId].normalizedAliases.includes(normalized)) {
    index[companyId].normalizedAliases.push(normalized);
  }

  return index;
}