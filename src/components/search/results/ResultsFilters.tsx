"use client";

import { useState } from "react";

type Filter =
  | "all"
  | "strong"
  | "potential"
  | "related"
  | "excluded";

const filters = [
  {
    id: "all",
    label: "Tous les résultats",
    count: 28,
    color: {
      text: "text-slate-700",
      bg: "bg-slate-100",
      border: "border-slate-300",
      hover: "hover:bg-slate-200",
    },
  },
  {
    id: "strong",
    label: "Strong Match",
    count: 9,
    color: {
      text: "hover:brightness-95",
      bg: "bg-emerald-50",
      border: "border-emerald-500",
      hover: "hover:bg-emerald-100",
    },
  },
  {
    id: "potential",
    label: "Potential Match",
    count: 11,
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
    count: 8,
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
    count: 0,
    color: {
      text: "text-slate-400",
      bg: "bg-slate-50",
      border: "border-slate-300",
      hover: "hover:bg-slate-100",
    },
  },
] as const;

export default function ResultsFilters() {
  const [active, setActive] = useState<Filter>("strong");

  return (
    <div className="flex flex-wrap items-center gap-3">

      {filters.map((filter) => {

        const isActive = active === filter.id;

        return (
          <button
  key={filter.id}
  type="button"
  onClick={() => setActive(filter.id)}
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
    ease-out
    ${filter.color.bg}
    ${filter.color.text}
    ${filter.color.hover}
    ${
      isActive
        ? `${filter.color.border} ring-2 ring-offset-1 ring-current/20 shadow-sm`
        : "border-transparent hover:shadow-sm"
    }
  `}
>
  <span className="transition-colors duration-200">
    {filter.label}
  </span>

  <span
    className="
      rounded-full
      bg-white/80
      px-2
      py-0.5
      text-xs
      font-bold
    "
  >
    {filter.count}
  </span>
</button>
        );

      })}

    </div>
  );
}