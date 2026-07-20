"use client";
import { useState } from "react";

import {
  Search,
  Layers,
  Globe,
  BriefcaseBusiness,
  Coins,
  TrendingUp,
  Percent,
  Calendar,
} from "lucide-react";

import OpportunityFilter from "./OpportunityFilter";

export default function OpportunityFilters() {
    const [openFilter, setOpenFilter] = useState<string | null>(null);
  return (
    <div className="space-y-3">

      <div className="flex items-center justify-between">

        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700">
          Affiner ma recherche
        </h2>

        <button className="text-sm font-semibold text-violet-500">
          Réinitialiser
        </button>

      </div>

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          placeholder="Rechercher..."
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none"
        />

      </div>

      <OpportunityFilter
  title="Secteur / Capacité"
  placeholder="Sélectionner un secteur"
  icon={Layers}
  options={[
    "Nucléaire",
    "Défense",
    "Ferroviaire",
    "Santé",
    "Eau",
  ]}
  isOpen={openFilter === "Secteur / Capacité"}
  onToggle={() =>
    setOpenFilter(
      openFilter === "Secteur / Capacité"
        ? null
        : "Secteur / Capacité"
    )
  }
/>

      <OpportunityFilter
  title="Région"
  placeholder="Sélectionner une zone"
  icon={Globe}
  options={[
    "Europe",
    "Moyen-Orient",
    "Afrique",
    "Asie centrale",
    "Amérique du Nord",
    "Amérique du Sud",
    "Océanie",
  ]}
  isOpen={openFilter === "Région"}
  onToggle={() =>
    setOpenFilter(
      openFilter === "Région"
        ? null
        : "Région"
    )
  }
/>

      <OpportunityFilter
  title="Type d'opportunité"
  placeholder="Sélectionner un type"
  icon={BriefcaseBusiness}
  options={[
    "Projet",
    "Appel d'offres",
    "Investissement",
    "PPP",
  ]}
  isOpen={openFilter === "Type d'opportunité"}
  onToggle={() =>
    setOpenFilter(
      openFilter === "Type d'opportunité"
        ? null
        : "Type d'opportunité"
    )
  }
/>

      <OpportunityFilter
  title="Montant estimé"
  placeholder="Sélectionner un montant"
  icon={Coins}
  options={[
    "< 10 M€",
    "10 - 50 M€",
    "50 - 250 M€",
    "> 250 M€",
  ]}
  isOpen={openFilter === "Montant estimé"}
  onToggle={() =>
    setOpenFilter(
      openFilter === "Montant estimé"
        ? null
        : "Montant estimé"
    )
  }
/>

      <OpportunityFilter
  title="Stade d'avancement"
  placeholder="Sélectionner un stade"
  icon={TrendingUp}
  options={[
    "Identification",
    "Études",
    "Appel d'offres",
    "Attribution",
  ]}
  isOpen={openFilter === "Stade d'avancement"}
  onToggle={() =>
    setOpenFilter(
      openFilter === "Stade d'avancement"
        ? null
        : "Stade d'avancement"
    )
  }
/>

      <OpportunityFilter
  title="Bailleur / Financement"
  placeholder="Sélectionner un bailleur"
  icon={Percent}
  options={[
    "Banque mondiale",
    "BERD",
    "BAD",
    "BEI",
  ]}
  isOpen={openFilter === "Bailleur / Financement"}
  onToggle={() =>
    setOpenFilter(
      openFilter === "Bailleur / Financement"
        ? null
        : "Bailleur / Financement"
    )
  }
/>

      <OpportunityFilter
  title="Date de publication"
  placeholder="Sélectionner une période"
  icon={Calendar}
  options={[
    "7 derniers jours",
    "30 derniers jours",
    "3 derniers mois",
    "Cette année",
  ]}
  isOpen={openFilter === "Date de publication"}
  onToggle={() =>
    setOpenFilter(
      openFilter === "Date de publication"
        ? null
        : "Date de publication"
    )
  }
/>

      <button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 py-3.5 font-semibold text-white transition hover:opacity-90">
        Voir les opportunités
      </button>

    </div>
  );
}