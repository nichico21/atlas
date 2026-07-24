"use client";

import { useState } from "react";

import { Sparkles, Search } from "lucide-react";

import SuggestionChips from "./SuggestionChips";

export default function SmartSearchCard() {
  const [prompt, setPrompt] = useState("");

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex items-start gap-3">

        <Sparkles
          className="mt-1 h-6 w-6 text-blue-600"
          strokeWidth={2}
        />

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            Décrivez votre besoin
          </h2>

          <p className="mt-2 text-slate-500">
            Soyez le plus précis possible afin d'obtenir des résultats pertinents.
          </p>

        </div>

      </div>

      <textarea
        rows={7}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={`Exemple :

Je recherche des fournisseurs français capables de moderniser un réseau
électrique national.
Les entreprises recherchées doivent disposer d'une expertise en postes
électriques, réseaux intelligents (smart grids), systèmes SCADA et
cybersécurité industrielle.
Une expérience sur des projets d'infrastructures au Moyen-Orient ou auprès
d'opérateurs publics serait un atout.`}
        className="
          mt-8
          w-full
          resize-none
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-6
          text-base
          leading-8
          outline-none
          transition-all
          duration-200
          placeholder:text-slate-400
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      />

      <SuggestionChips
        onSelect={setPrompt}
      />

      <div className="mt-10 flex justify-center">

        <button
          className="
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-blue-600
            px-8
            py-4
            text-lg
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-200
            hover:bg-blue-700
            hover:shadow-lg
          "
        >

          <Search
            size={20}
            strokeWidth={2}
          />

          Lancer la recherche

        </button>

      </div>

    </section>
  );
}