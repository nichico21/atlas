"use client";

import { useSearchParams } from "next/navigation";

import OpportunityToolbar from "@/components/opportunity/OpportunityToolbar";
import OpportunityStats from "@/components/opportunity/OpportunityStats";
import OpportunityFilters from "@/components/opportunity/OpportunityFilters";
import OpportunityMap from "@/components/opportunity/OpportunityMap";
import OpportunityGrid from "@/components/opportunity/OpportunityGrid";

export default function OpportunitiesPage() {
  const searchParams = useSearchParams();

  const view =
    searchParams.get("view") === "list"
      ? "list"
      : "map";

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-[1600px] px-8 py-8">
        <div className="flex gap-8">
          {/* Colonne gauche */}
          <aside className="w-80 shrink-0">
            <OpportunityFilters />
          </aside>

          {/* Colonne droite */}
          <section className="flex-1 space-y-4">
            <OpportunityToolbar
              view={view}
            />

            <OpportunityStats />

            {view === "map" ? (
              <OpportunityMap />
            ) : (
              <OpportunityGrid />
            )}
          </section>
        </div>
      </div>
    </main>
  );
}