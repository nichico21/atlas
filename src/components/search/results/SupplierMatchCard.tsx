"use client";

import Image from "next/image";
import { Check, Plus } from "lucide-react";

import { useState } from "react";
import ScoreDetailsModal from "./ScoreDetailsModal";
import MatchScore from "./MatchScore";
import SupplierTags from "./SupplierTags";
import SupplierHighlights from "./SupplierHighlights";

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

    const [openScore, setOpenScore] = useState(false);
    
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

            <SupplierTags tags={tags} />

          </div>

        </div>

                {/* =========================
            MATCH SCORE
        ========================== */}

        <div
  className="flex cursor-pointer flex-col items-center transition-transform duration-200 hover:scale-105"
  onClick={() => setOpenScore(true)}
>
  <MatchScore
    score={score}
    level="strong"
  />
</div>

        {/* =========================
            HIGHLIGHTS
        ========================== */}

        <div>

          <SupplierHighlights
    highlights={highlights}
/>

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

      <ScoreDetailsModal
  open={openScore}
  onClose={() => setOpenScore(false)}
  company={company}
  score={score}
/>

    </div>
  );
}