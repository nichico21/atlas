"use client";

import { CheckCircle2, Sparkles } from "lucide-react";

type ResultsHeaderProps = {
  totalResults?: number;
};

export default function ResultsHeader({
  totalResults = 28,
}: ResultsHeaderProps) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white px-8 py-7 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">

            <Sparkles
              size={16}
              strokeWidth={2.5}
            />

            Analyse terminée

          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            {totalResults} fournisseurs identifiés
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
            Notre moteur de matching a analysé votre besoin et identifié les
            entreprises françaises les plus pertinentes selon leur secteur
            d'activité, leurs références internationales, leurs technologies
            et leur expérience à l'export.
          </p>

        </div>

        <div className="hidden rounded-3xl bg-emerald-50 p-6 lg:flex">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500">

              <CheckCircle2
                className="text-white"
                size={30}
                strokeWidth={2.5}
              />

            </div>

            <div>

              <div className="text-sm font-medium text-slate-500">
                Meilleur score
              </div>

              <div className="text-4xl font-bold text-emerald-600">
                96 %
              </div>

              <div className="text-sm text-slate-500">
                Schneider Electric
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}