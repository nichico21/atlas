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
      "Looking for French companies specialized in power generation, electrical grids, substations, HV equipment, SCADA and smart energy solutions.",
  },
  {
    label: "Transport",
    icon: Train,
    prompt:
      "Looking for French suppliers specialized in rail, metro, signalling, mobility infrastructure and rolling stock.",
  },
  {
    label: "Défense",
    icon: Shield,
    prompt:
      "Looking for French companies active in defence, cybersecurity, surveillance and critical infrastructures.",
  },
  {
    label: "Eau",
    icon: Droplets,
    prompt:
      "Looking for French suppliers specialized in water treatment, desalination and wastewater management.",
  },
  {
    label: "Numérique",
    icon: Laptop,
    prompt:
      "Looking for French companies specialized in digital solutions, AI, software, cloud and cybersecurity.",
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