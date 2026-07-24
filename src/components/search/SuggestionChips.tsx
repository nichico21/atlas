"use client";

import {
  Zap,
  Train,
  Shield,
  Droplets,
  Laptop,
  Plus,
} from "lucide-react";

type Suggestion = {
  label: string;
  prompt: string;
  icon: React.ElementType;
};

type SuggestionChipsProps = {
  onSelect: (prompt: string) => void;
};

const suggestions: Suggestion[] = [
  {
    label: "Énergie",
    icon: Zap,
    prompt:
      "Je recherche des entreprises françaises capables d'intervenir sur un projet de modernisation d'un réseau électrique national. Les fournisseurs recherchés doivent disposer d'une expertise reconnue en postes électriques haute tension, réseaux intelligents (smart grids), systèmes SCADA, postes numériques et cybersécurité des infrastructures critiques. Une expérience sur des projets financés par des bailleurs internationaux ou réalisés au Moyen-Orient constituerait un atout.",
  },
  {
    label: "Transport",
    icon: Train,
    prompt:
      "Je souhaite identifier des fournisseurs français spécialisés dans les infrastructures de transport ferroviaire et urbain. Les entreprises recherchées doivent proposer des solutions couvrant notamment les systèmes de signalisation, le matériel roulant, les équipements de voie, les métros, tramways et les solutions de mobilité intelligente. Une expérience dans des projets de métro, de train à grande vitesse ou de modernisation de réseaux ferroviaires serait appréciée.",
  },
  {
    label: "Défense",
    icon: Shield,
    prompt:
      "Je recherche des industriels français intervenant dans les secteurs de la défense et de la sécurité. Les compétences attendues concernent notamment les systèmes de surveillance, la cybersécurité, la protection des infrastructures critiques, les équipements de défense ainsi que les solutions de commandement et de contrôle.",
  },
  {
    label: "Eau",
    icon: Droplets,
    prompt:
      "Je recherche des entreprises françaises disposant d'une expertise dans les infrastructures hydrauliques et le traitement de l'eau. Les fournisseurs recherchés doivent proposer des solutions de dessalement, de production d'eau potable, de traitement des eaux usées, de réutilisation des eaux et d'optimisation des réseaux.",
  },
  {
    label: "Numérique",
    icon: Laptop,
    prompt:
      "Je souhaite identifier des entreprises françaises spécialisées dans les technologies numériques. Les fournisseurs recherchés doivent proposer des solutions en intelligence artificielle, logiciels métiers, cloud computing, cybersécurité, gestion des données et transformation digitale des organisations.",
  },
  {
    label: "Tous les secteurs",
    icon: Plus,
    prompt: "",
  },
];

export default function SuggestionChips({
  onSelect,
}: SuggestionChipsProps) {
  return (
    <div className="mt-6">

      <p className="mb-3 text-sm font-medium text-slate-500">
        Suggestions populaires
      </p>

      <div className="flex flex-wrap gap-3">

        {suggestions.map((suggestion) => {

          const Icon = suggestion.icon;

          return (
            <button
              key={suggestion.label}
              onClick={() => onSelect(suggestion.prompt)}
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-slate-700
                transition-all
                duration-200
                hover:border-blue-300
                hover:bg-blue-50
                hover:text-blue-700
              "
            >
              <Icon
                size={16}
                strokeWidth={2}
              />

              {suggestion.label}

            </button>
          );
        })}

      </div>

    </div>
  );
}