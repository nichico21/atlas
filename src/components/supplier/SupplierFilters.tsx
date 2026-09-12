"use client";
import { useState } from "react";

import {
  Search, Layers, Globe, BriefcaseBusiness, Coins, TrendingUp, Link2, Languages,
} from "lucide-react";

import OpportunityFilter from "./OpportunityFilter";

export interface SupplierFilterState {
  sectors: string[];
  regions: string[];
  sizes: string[];
  exportLevels: string[];
  certifications: string[];
  chainPositions: string[];
  languages: string[];
  search: string;
}

const EMPTY_FILTERS: SupplierFilterState = {
  sectors: [], regions: [], sizes: [], exportLevels: [],
  certifications: [], chainPositions: [], languages: [], search: "",
};

export default function SupplierFilters({
  onFiltersChange,
}: {
  onFiltersChange: (filters: SupplierFilterState) => void;
}) {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [filters, setFilters] = useState<SupplierFilterState>(EMPTY_FILTERS);

  function update<K extends keyof SupplierFilterState>(key: K, value: SupplierFilterState[K]) {
    const next = { ...filters, [key]: value };
    setFilters(next);
    onFiltersChange(next);
  }

  function reset() {
    setFilters(EMPTY_FILTERS);
    onFiltersChange(EMPTY_FILTERS);
  }

  return (
    <div className="space-y-3">

      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700">Affiner ma recherche</h2>
        <button onClick={reset} className="text-sm font-semibold text-blue-500">Réinitialiser</button>
      </div>

      <div className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          placeholder="Rechercher..."
          value={filters.search}
          onChange={(e) => update("search", e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none"
        />
      </div>

      <OpportunityFilter
        title="Secteur d'activité" placeholder="Sélectionner un secteur" icon={Layers}
        options={["Agriculture et Agroalimentaire", "Aéronautique", "Automobile", "Bois", "Chimie et Matériaux", "Construction", "Défense & Sécurité", "Eau", "Ferroviaire", "Infrastructures numériques", "Naval", "Mines et Métallurgie", "Énergie", "Nucléaire", "Santé", "Transformation et Valorisation des Déchets", "Spatial"]}
        isOpen={openFilter === "Secteur"} onToggle={() => setOpenFilter(openFilter === "Secteur" ? null : "Secteur")}
        selected={filters.sectors} onChange={(v) => update("sectors", v)}
      />

      <OpportunityFilter
        title="Région" placeholder="Sélectionner une zone" icon={Globe}
        options={["Afrique", "Moyen-Orient", "Asie", "Europe", "Amériques", "Océanie"]}
        isOpen={openFilter === "Region"} onToggle={() => setOpenFilter(openFilter === "Region" ? null : "Region")}
        selected={filters.regions} onChange={(v) => update("regions", v)}
      />

      <OpportunityFilter
        title="Taille d'entreprise" placeholder="Sélectionner une taille" icon={BriefcaseBusiness}
        options={["1 à 9 salariés", "10 à 49 salariés", "50 à 249 salariés", "250 à 999 salariés", "1 000 à 4 999 salariés", "5 000 salariés et plus"]}
        isOpen={openFilter === "Taille"} onToggle={() => setOpenFilter(openFilter === "Taille" ? null : "Taille")}
        selected={filters.sizes} onChange={(v) => update("sizes", v)}
      />

      <OpportunityFilter
        title="Expérience export" placeholder="Sélectionner un niveau" icon={Coins}
        options={["Faible", "Moyenne", "Élevée"]}
        isOpen={openFilter === "Export"} onToggle={() => setOpenFilter(openFilter === "Export" ? null : "Export")}
        selected={filters.exportLevels} onChange={(v) => update("exportLevels", v)}
      />

      <OpportunityFilter
        title="Certification" placeholder="Sélectionner une certification" icon={TrendingUp}
        options={["ISO 9001", "ISO 14001", "ISO 45001", "ISO 27001", "Qualiopi", "CE"]}
        isOpen={openFilter === "Certification"} onToggle={() => setOpenFilter(openFilter === "Certification" ? null : "Certification")}
        selected={filters.certifications} onChange={(v) => update("certifications", v)}
      />

      <OpportunityFilter
        title="Position dans la chaîne de valeur" placeholder="Sélectionner un rôle" icon={Link2}
        options={["Maître d'œuvre / Donneur d'ordre", "Fournisseur de rang 1", "Fournisseur de rang 2 et plus", "Fournisseur de matières premières", "Fabricant de composants", "Intégrateur de systèmes", "Prestataire de services techniques"]}
        isOpen={openFilter === "Chaine"} onToggle={() => setOpenFilter(openFilter === "Chaine" ? null : "Chaine")}
        selected={filters.chainPositions} onChange={(v) => update("chainPositions", v)}
      />

      <OpportunityFilter
        title="Langues" placeholder="Sélectionner une langue" icon={Languages}
        options={["Français", "Anglais", "Arabe", "Espagnol", "Allemand"]}
        isOpen={openFilter === "Langues"} onToggle={() => setOpenFilter(openFilter === "Langues" ? null : "Langues")}
        selected={filters.languages} onChange={(v) => update("languages", v)}
      />

    </div>
  );
}