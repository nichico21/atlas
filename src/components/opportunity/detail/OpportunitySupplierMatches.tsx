import { supplierMatches } from "@/data/supplierMatches";
import SupplierMatchCard from "./supplier/SupplierMatchCard";

type OpportunitySupplierMatchesProps = {
  opportunityId: string;
};

export default function OpportunitySupplierMatches({
  opportunityId,
}: OpportunitySupplierMatchesProps) {
  // Conservé pour la future logique de matching
  void opportunityId;

  const matches = supplierMatches;

  if (matches.length === 0) {
    return null;
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-800 to-indigo-500 px-6 py-5 text-white">

        <h2 className="text-xl font-bold">
          Entreprises françaises compatibles avec cette opportunité
        </h2>

        <p className="mt-1 text-sm text-blue-100">
          Sélection basée sur les capacités requises,
          l'empreinte géographique et les références comparables.
        </p>

      </div>

      {/* Grid */}

      <div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-3">

        {matches.map((match) => (
          <SupplierMatchCard
            key={match.id}
            match={match}
          />
        ))}

      </div>

    </section>
  );
}