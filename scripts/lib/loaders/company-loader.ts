import { existsSync, readdirSync } from "fs";
import { loadJson } from "../json-loader";
import { Company } from "../models/company";

function isCompanyFile(file: string): boolean {
  return file.endsWith(".json") && !file.endsWith(".provenance.json") && !file.startsWith("_");
}

export function loadCompany(id: string): Company {
  return loadJson<Company>(`catalog/companies/${id}.json`);
}

export function listCompanies(): string[] {
  if (!existsSync("catalog/companies")) return [];
  return readdirSync("catalog/companies")
    .filter(isCompanyFile)
    .map(file => file.replace(".json", ""));
}

export function loadCompanies(): Record<string, Company> {
  return Object.fromEntries(listCompanies().map(id => [id, loadCompany(id)]));
}