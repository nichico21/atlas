"use client";

import { Dispatch, SetStateAction } from "react";
import { Map, List, RotateCcw } from "lucide-react";

type OpportunityToolbarProps = {
  view: "map" | "list";
  setView: Dispatch<SetStateAction<"map" | "list">>;
};

export default function OpportunityToolbar({
  view,
  setView,
}: OpportunityToolbarProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Explorez les opportunités internationales
          </h1>

          <p className="mt-2 text-lg text-slate-500">
            Zoom sur la carte pour découvrir les opportunités par zone
            géographique
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-violet-500">
          <RotateCcw size={16} />
          Réinitialiser
        </button>
      </div>

      <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1">
        <button
          onClick={() => setView("map")}
          className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
            view === "map"
              ? "bg-violet-600 text-white"
              : "text-slate-600"
          }`}
        >
          <Map size={16} />
          Carte
        </button>

        <button
          onClick={() => setView("list")}
          className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
            view === "list"
              ? "bg-violet-600 text-white"
              : "text-slate-600"
          }`}
        >
          <List size={16} />
          Liste
        </button>
      </div>
    </div>
  );
}