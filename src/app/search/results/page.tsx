"use client";

import { useMemo, useState } from "react";

import ResultsHeader from "@/components/search/results/ResultsHeader";
import ResultsFilters from "@/components/search/results/ResultsFilters";
import SupplierMatchCard from "@/components/search/results/SupplierMatchCard";

export type Filter =
  | "all"
  | "strong"
  | "potential"
  | "related"
  | "excluded";

const suppliers = [
  {
    logo: "/logos/schneider.png",
    company: "Schneider Electric",
    country: "France",
    score: 96,
    filter: "strong" as Filter,
    matchLevel: "Strong Match" as const,
    tags: [
      "Smart Grids",
      "SCADA",
      "EMS",
      "Digital Substations",
      "Cybersecurity",
    ],
    highlights: [
      "Leader mondial des réseaux électriques intelligents",
      "Présence historique au Moyen-Orient",
      "Références Saudi Electricity Company",
      "Plus de 340 projets utilities dans le monde",
    ],
  },

  {
    logo: "/logos/alstom.png",
    company: "Alstom Grid",
    country: "France",
    score: 89,
    filter: "strong" as Filter,
    matchLevel: "Strong Match" as const,
    tags: [
      "Grid Solutions",
      "Substations",
      "Protection",
      "Automation",
    ],
    highlights: [
      "Solutions HT jusqu'à 800 kV",
      "Présence GCC",
      "Références utilities majeures",
      "IEC 61850 compliant",
    ],
  },

  {
    logo: "/logos/abb.png",
    company: "ABB France",
    country: "France",
    score: 87,
    filter: "strong" as Filter,
    matchLevel: "Strong Match" as const,
    tags: [
      "Automation",
      "Digital",
      "Global references",
    ],
    highlights: [
      "Digital substations",
      "Manufacturing local",
      "150+ références",
      "IFC approved supplier",
    ],
  },

  {
    logo: "/logos/veolia.png",
    company: "Veolia",
    country: "France",
    score: 74,
    filter: "potential" as Filter,
    matchLevel: "Potential Match" as const,
    tags: [
      "Water",
      "Desalination",
      "Wastewater",
    ],
    highlights: [
      "Leader mondial de l'eau",
      "Dessalement",
      "Présence MENA",
    ],
  },

  {
    logo: "/logos/capgemini.png",
    company: "Capgemini",
    country: "France",
    score: 68,
    filter: "related" as Filter,
    matchLevel: "Related Capability" as const,
    tags: [
      "Digital",
      "Cloud",
      "AI",
    ],
    highlights: [
      "Transformation digitale",
      "Cloud",
      "Cybersécurité",
    ],
  },
];

export default function ResultsPage() {
  const [activeFilter, setActiveFilter] =
    useState<Filter>("all");

    const counts = {
  all: suppliers.length,
  strong: suppliers.filter(s => s.filter === "strong").length,
  potential: suppliers.filter(s => s.filter === "potential").length,
  related: suppliers.filter(s => s.filter === "related").length,
  excluded: suppliers.filter(s => s.filter === "excluded").length,
};

  const displayedSuppliers = useMemo(() => {
    if (activeFilter === "all") {
      return suppliers;
    }

    return suppliers.filter(
      (supplier) => supplier.filter === activeFilter
    );
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-7xl space-y-6 px-8 py-8">

        <ResultsHeader
          totalResults={suppliers.length}
        />

        <ResultsFilters
          active={activeFilter}
          onChange={setActiveFilter}
          counts={counts}
        />

        <div className="space-y-6">

          {displayedSuppliers.map((supplier) => (

            <SupplierMatchCard
              key={supplier.company}
              {...supplier}
            />

          ))}

        </div>

      </div>

    </main>
  );
}