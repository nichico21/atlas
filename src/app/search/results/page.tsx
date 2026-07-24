"use client";

import ResultsHeader from "@/components/search/results/ResultsHeader";
import ResultsFilters from "@/components/search/results/ResultsFilters";
import SupplierMatchCard from "@/components/search/results/SupplierMatchCard";

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-7xl px-8 py-8">

        <ResultsHeader />

        <div className="mt-8">
          <ResultsFilters />
        </div>

        <div className="mt-8 space-y-6">

          <SupplierMatchCard
            logo="/logos/schneider-electric.png"
            company="Schneider Electric"
            country="France"
            score={96}
            matchLevel="Strong Match"
            tags={[
              "Smart Grids",
              "SCADA",
              "Digital Substations",
              "HV Equipment",
            ]}
            highlights={[
              "Leader mondial des réseaux électriques intelligents",
              "Présence historique au Moyen-Orient",
              "Références Saudi Electricity Company",
            ]}
          />

          <SupplierMatchCard
            logo="/logos/alstom.png"
            company="Alstom"
            country="France"
            score={91}
            matchLevel="Strong Match"
            tags={[
              "Rail",
              "Signalisation",
              "Métro",
              "Matériel roulant",
            ]}
            highlights={[
              "Leader mondial du transport ferroviaire",
              "Plus de 80 pays couverts",
              "Références métro de Riyad et du Caire",
            ]}
          />

          <SupplierMatchCard
            logo="/logos/veolia.png"
            company="Veolia"
            country="France"
            score={86}
            matchLevel="Potential Match"
            tags={[
              "Eau",
              "Dessalement",
              "Traitement",
            ]}
            highlights={[
              "Expert mondial du traitement des eaux",
              "Forte présence au Moyen-Orient",
              "Références majeures dans le dessalement",
            ]}
          />

        </div>

      </div>

    </main>
  );
}