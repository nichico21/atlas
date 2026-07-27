"use client";

import { X } from "lucide-react";

import { Region } from "@/types/region";

type Props = {
  region: Region | null;
  onClose: () => void;
};

export default function RegionDrawer({
  region,
  onClose,
}: Props) {
  return (
    <aside
      className={`
        transition-all
        duration-500
        ease-in-out
        overflow-hidden
        ${
          region
            ? "w-[420px] opacity-100"
            : "w-0 opacity-0"
        }
      `}
    >
      {region && (
        <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

          <div className="mb-8 flex items-start justify-between">

            <div>

              <h2 className="text-2xl font-bold text-slate-900">
                {region.name}
              </h2>

              <p className="mt-2 text-slate-500">
                {region.companyCount} entreprises
              </p>

            </div>

            <button
              onClick={onClose}
              className="rounded-lg p-2 transition hover:bg-slate-100"
            >
              <X size={20} />
            </button>

          </div>

          <div className="space-y-4">

            <div className="rounded-2xl bg-slate-50 p-5">

              <div className="text-3xl font-bold text-blue-600">
                {region.companyCount}
              </div>

              <div className="text-sm text-slate-500">
                Entreprises référencées
              </div>

            </div>

            <div className="rounded-2xl bg-slate-50 p-5">

              <div className="text-3xl font-bold text-emerald-600">
                +{region.newCompanies}
              </div>

              <div className="text-sm text-slate-500">
                Nouvelles ce mois-ci
              </div>

            </div>

            <div className="rounded-2xl bg-slate-50 p-5">

              <div className="text-3xl font-bold text-blue-600">
                {region.countriesCovered}
              </div>

              <div className="text-sm text-slate-500">
                Pays couverts
              </div>

            </div>

          </div>

        </div>
      )}
    </aside>
  );
}