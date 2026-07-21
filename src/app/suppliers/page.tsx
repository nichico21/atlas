"use client";

import { useState } from "react";

import PageHeader from "@/components/shared/PageHeader";

import SupplierToolbar from "@/components/supplier/SupplierToolbar";
import SupplierStats from "@/components/supplier/SupplierStats";
import SupplierFilters from "@/components/supplier/SupplierFilters";
import SupplierPlaceholder from "@/components/supplier/SupplierPlaceholder";
import InteractiveMap from "@/components/map/InteractiveMap";

import { RotateCcw } from "lucide-react";

export default function SuppliersPage() {
  const [view, setView] =
    useState<"map" | "list">("map");

  return (
    <main className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-[1600px] px-8 py-8">

        <div className="flex gap-8">

          <aside className="w-80 shrink-0">

            <SupplierFilters />

          </aside>

          <section className="flex-1 space-y-6">

            <PageHeader
              title="Explorez les entreprises françaises"
              subtitle="Trouvez les meilleures entreprises françaises par région, secteur ou expertise."
              actions={
                <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-blue-500">
                  <RotateCcw size={16} />
                  Réinitialiser
                </button>
              }
            />

            <SupplierToolbar
              view={view}
              onViewChange={setView}
            />

            <SupplierStats />

            <InteractiveMap />

          </section>

        </div>

      </div>

    </main>
  );
}