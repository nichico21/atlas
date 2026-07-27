"use client";

export type Filter =
  | "all"
  | "strong"
  | "potential"
  | "related"
  | "excluded";

type ResultsFiltersProps = {
  active: Filter;
  onChange: (filter: Filter) => void;
counts: {
    all: number;
    strong: number;
    potential: number;
    related: number;
    excluded: number;
  };
};

const filters = [
  {
    id: "all",
    label: "Tous les résultats",
    color: {
      text: "text-slate-700",
      bg: "bg-slate-100",
      border: "border-slate-500",
      hover: "hover:bg-slate-200",
    },
  },
  {
    id: "strong",
    label: "Strong Match",
    color: {
      text: "text-emerald-700",
      bg: "bg-emerald-50",
      border: "border-emerald-500",
      hover: "hover:bg-emerald-100",
    },
  },
  {
    id: "potential",
    label: "Potential Match",
    color: {
      text: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-amber-500",
      hover: "hover:bg-amber-100",
    },
  },
  {
    id: "related",
    label: "Related Capability",
    color: {
      text: "text-sky-700",
      bg: "bg-sky-50",
      border: "border-sky-500",
      hover: "hover:bg-sky-100",
    },
  },
  {
    id: "excluded",
    label: "Excluded",
    color: {
      text: "text-slate-400",
      bg: "bg-slate-50",
      border: "border-slate-300",
      hover: "hover:bg-slate-100",
    },
  },
] as const;

export default function ResultsFilters({
  active,
  onChange,
  counts,
}: ResultsFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {filters.map((filter) => {
        const isActive = active === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onChange(filter.id)}
            className={`
              flex
              items-center
              gap-2
              rounded-full
              border
              px-4
              py-2
              text-sm
              font-semibold
              transition-all
              duration-200
              ${filter.color.bg}
              ${filter.color.text}
              ${filter.color.hover}
              ${
                isActive
                  ? `${filter.color.border} ring-2 ring-offset-1 ring-current/20 shadow-sm`
                  : "border-transparent"
              }
            `}
          >
            <span className="transition-all duration-200">
              {filter.label}
            </span>

            <span className="rounded-full bg-white/70 px-2 py-0.5 text-xs font-bold">
              {counts[filter.id]}
            </span>
          </button>
        );
      })}
    </div>
  );
}