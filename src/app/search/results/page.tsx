"use client";

import Image from "next/image";
import { Check, Plus } from "lucide-react";

type SupplierMatchCardProps = {
  logo: string;
  company: string;
  country: string;

  tags: string[];

  score: number;

  matchLevel: "Strong Match" | "Potential Match" | "Related Capability";

  highlights: string[];
};

export default function SupplierMatchCard({
  logo,
  company,
  country,
  tags,
  score,
  matchLevel,
  highlights,
}: SupplierMatchCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white px-8 py-6 shadow-sm transition-all duration-200 hover:shadow-md">

      <div className="grid grid-cols-[1.7fr_180px_1.3fr_170px] gap-8 items-center">

        {/* =========================
            LOGO + COMPANY
        ========================== */}

        <div className="flex items-start gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2">

            <Image
              src={logo}
              alt={company}
              width={56}
              height={56}
              className="object-contain"
            />

          </div>

          <div className="flex-1">

            <div className="flex items-center gap-2">

              <h3 className="text-3xl font-bold text-slate-900">
                {company}
              </h3>

              <span className="text-sm text-slate-500">
                🇫🇷 {country}
              </span>

            </div>

            <div className="mt-4 flex flex-wrap gap-2">

              {tags.map((tag) => (

                <span
                  key={tag}
                  className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {tag}
                </span>

              ))}

            </div>

          </div>

        </div>

            {/* =========================
            MATCH SCORE
        ========================== */}

        <div className="flex flex-col items-center">

          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-[6px] border-emerald-500">

            <div className="text-center">

              <div className="text-3xl font-bold text-slate-900">
                {score}%
              </div>

              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Strong
              </div>

            </div>

          </div>

          <span className="mt-4 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-700">
            {matchLevel}
          </span>

        </div>

        {/* =========================
            HIGHLIGHTS
        ========================== */}

        <div>

          <ul className="space-y-3">

            {highlights.map((highlight) => (

              <li
                key={highlight}
                className="flex items-start gap-3"
              >

                <Check
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-500"
                  strokeWidth={2.5}
                />

                <span className="text-sm leading-6 text-slate-600">
                  {highlight}
                </span>

              </li>

            ))}

          </ul>

        </div>

                {/* =========================
            ACTIONS
        ========================== */}

        <div className="flex flex-col items-end gap-3">

          <button
            type="button"
            className="
              w-full
              rounded-xl
              border
              border-blue-600
              bg-white
              px-5
              py-3
              text-sm
              font-semibold
              text-blue-600
              transition-all
              duration-200
              hover:bg-blue-50
            "
          >
            Voir le profil
          </button>

          <button
            type="button"
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-600
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-200
              hover:bg-blue-700
            "
          >
            <Plus
              size={16}
              strokeWidth={2.5}
            />

            Ajouter à la shortlist
          </button>

        </div>

      </div>

    </div>
  );
}    