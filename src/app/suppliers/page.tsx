"use client";

import { useEffect, useMemo, useState } from "react";

import PageHeader from "@/components/shared/PageHeader";
import SupplierToolbar from "@/components/supplier/SupplierToolbar";
import SupplierStats from "@/components/supplier/SupplierStats";
import SupplierFilters, { SupplierFilterState } from "@/components/supplier/SupplierFilters";
import MapExplorer from "@/components/map/MapExplorer";

import { RotateCcw } from "lucide-react";
import { getCompanies } from "@/lib/supabase";
import { Company } from "@/types/company";

function matchesFilters(company: Company, filters: SupplierFilterState): boolean {
  if (filters.search && !company.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
  if (filters.sectors.length > 0 && !company.sectors.some((s) => filters.sectors.includes(s))) return false;
  if (filters.exportLevels.length > 0 && !filters.exportLevels.includes(company.exportExperience)) return false;
  if (filters.certifications.length > 0 && !company.certifications.some((c) => filters.certifications.includes(c))) return false;
  if (filters.regions.length > 0 && !(company.geographicZones ?? []).some((z) => filters.regions.includes(z))) return false;
  if (filters.sizes.length > 0 && (!company.headcountRange || !filters.sizes.includes(company.headcountRange))) return false;
  if (filters.chainPositions.length > 0 && !(company.supplyChainPosition ?? []).some((p) => filters.chainPositions.includes(p))) return false;
  return true;
}

export default function SuppliersPage() {
  const [view, setView] = useState<"map" | "list">("map");
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filters, setFilters] = useState<SupplierFilterState | null>(null);

  useEffect(() => {
    getCompanies().then(setCompanies);
  }, []);

  const filteredCompanies = useMemo(() => {
    if (!filters) return companies;
    return companies.filter((c) => matchesFilters(c, filters));
  }, [companies, filters]);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-[1600px] px-8 py-8">
        <div className="flex gap-8">
          <aside className="w-80 shrink-0">
            <SupplierFilters onFiltersChange={setFilters} />
          </aside>

          <section className="flex-1 space-y-6">
            <PageHeader
              title="Explorez les entreprises françaises"
              subtitle="Trouvez les meilleures entreprises françaises par région, secteur ou expertise."
              actions={
                <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-blue-500">
                  <RotateCcw size={16} />
                  Réinitialiser
                </button>
              }
            />
            <SupplierToolbar view={view} onViewChange={setView} />
            <SupplierStats companies={filteredCompanies} />
            <MapExplorer />
          </section>
        </div>
      </div>
    </main>
  );
}