"use client";

import { useState } from "react";

import OpportunityToolbar from "@/components/opportunity/OpportunityToolbar";
import OpportunityStats from "@/components/opportunity/OpportunityStats";
import OpportunityFilters from "@/components/opportunity/OpportunityFilters";
import OpportunityMap from "@/components/opportunity/OpportunityMap";
import OpportunityGrid from "@/components/opportunity/OpportunityGrid";
import PageHeader from "@/components/shared/PageHeader";
import { RotateCcw } from "lucide-react";

export default function OpportunitiesPage() {
  const [view, setView] = useState<"map" | "list">("map");

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-[1600px] px-8 py-8">
        <div className="flex gap-8">
          {/* Colonne gauche */}
          <aside className="w-80 shrink-0">
            <OpportunityFilters />
          </aside>

          {/* Colonne droite */}
          <section className="flex-1 space-y-6">

  <PageHeader
    title="Explorez les opportunités internationales"
    subtitle="Zoom sur la carte pour découvrir les opportunités par zone géographique."
    actions={
      <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-violet-500">
        <RotateCcw size={16} />
        Réinitialiser
      </button>
    }
  />

    <OpportunityToolbar
    view={view}
    onViewChange={setView}
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