"use client";

import { Sparkles, SlidersHorizontal } from "lucide-react";

type SearchMode = "smart" | "structured";

type SearchModeToggleProps = {
  mode: SearchMode;
  onChange: (mode: SearchMode) => void;
};

export default function SearchModeToggle({
  mode,
  onChange,
}: SearchModeToggleProps) {
  return (
    <div className="flex justify-start">
      <div className="inline-flex rounded-2xl bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => onChange("smart")}
          className={`flex min-w-[230px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 ${
            mode === "smart"
              ? "bg-blue-600 text-white shadow-md"
              : "text-slate-600 hover:bg-white hover:text-slate-900"
          }`}
        >
          <Sparkles
            size={18}
            strokeWidth={2}
          />

          <span>Recherche intelligente</span>
        </button>

        <button
          type="button"
          onClick={() => onChange("structured")}
          className={`flex min-w-[230px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 ${
            mode === "structured"
              ? "bg-blue-600 text-white shadow-md"
              : "text-slate-600 hover:bg-white hover:text-slate-900"
          }`}
        >
          <SlidersHorizontal
            size={18}
            strokeWidth={2}
          />

          <span>Recherche structurée</span>
        </button>
      </div>
    </div>
  );
}