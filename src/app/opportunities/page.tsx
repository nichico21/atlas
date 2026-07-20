import OpportunityToolbar from "@/components/opportunity/OpportunityToolbar";
import OpportunityStats from "@/components/opportunity/OpportunityStats";
import OpportunityFilters from "@/components/opportunity/OpportunityFilters";
import OpportunityMap from "@/components/opportunity/OpportunityMap";

export default function OpportunitiesPage() {
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

            <OpportunityToolbar />

            <OpportunityStats />

            <OpportunityMap />

          </section>

        </div>

      </div>
    </main>
  );
}