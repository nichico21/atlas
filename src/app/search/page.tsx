"use client";

import { useState } from "react";

import SearchHero from "@/components/search/SearchHero";
import SearchModeToggle from "@/components/search/SearchModeToggle";
import SmartSearchCard from "@/components/search/SmartSearchCard";
import StructuredSearchCard from "@/components/search/StructuredSearchCard";
import SearchFooter from "@/components/search/SearchFooter";

export default function SearchPage() {
  const [mode, setMode] = useState<"smart" | "structured">("smart");

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-5 px-8 py-4">
        {/* Hero */}
        <SearchHero />

        {/* Search workspace */}
        <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <SearchModeToggle
            mode={mode}
            onChange={setMode}
          />

          <div className="my-3 border-t border-slate-100" />

          {mode === "smart" ? (
            <SmartSearchCard />
          ) : (
            <StructuredSearchCard />
          )}
        </section>

        {/* Footer */}
        <SearchFooter />
      </div>
    </main>
  );
}