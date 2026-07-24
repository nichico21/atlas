"use client";

import { X } from "lucide-react";

type ScoreDetailsModalProps = {
  open: boolean;
  onClose: () => void;

  company: string;
  score: number;
};

const criteria = [
  {
    title: "Adéquation sectorielle",
    score: 30,
    max: 30,
    description:
      "Leader mondial des smart grids, SCADA, EMS et postes numériques parfaitement alignés avec le besoin.",
  },
  {
    title: "Adéquation géographique",
    score: 20,
    max: 20,
    description:
      "Présence régionale à Riyad et Dubaï, plus de 2 000 collaborateurs au Moyen-Orient.",
  },
  {
    title: "Références comparables",
    score: 18,
    max: 20,
    description:
      "Références majeures auprès de Saudi Electricity Company et nombreux projets EPC internationaux.",
  },
  {
    title: "Capacité à exécuter le projet",
    score: 9,
    max: 10,
    description:
      "Capacité démontrée sur des projets supérieurs à 800 M€.",
  },
  {
    title: "Expérience bailleurs / secteur public",
    score: 8,
    max: 10,
    description:
      "Préqualifié Banque mondiale, AFD, BEI et autres institutions financières internationales.",
  },
  {
    title: "Certifications & conformité",
    score: 9,
    max: 10,
    description:
      "ISO 27001, IEC 62443 et fortes capacités en cybersécurité industrielle.",
  },
];

export default function ScoreDetailsModal({
  open,
  onClose,
  company,
  score,
}: ScoreDetailsModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}

        <div className="mb-8 flex items-start justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            Détail du score — {company}
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg border border-slate-200 p-2 transition hover:bg-slate-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* SCORE */}

        <div className="mb-10 flex justify-center">

          <div className="flex h-28 w-28 items-center justify-center rounded-full border-[8px] border-emerald-500">

            <div className="text-center">

              <div className="text-5xl font-bold text-emerald-600">
                {score}
              </div>

              <div className="text-sm text-slate-500">
                /100
              </div>

            </div>

          </div>

        </div>

        {/* DETAILS */}

        <div className="space-y-7">

          {criteria.map((criterion) => {

            const percentage =
              (criterion.score / criterion.max) * 100;

            return (
              <div key={criterion.title}>

                <div className="mb-2 flex justify-between">

                  <h3 className="font-semibold text-slate-900">
                    {criterion.title}
                  </h3>

                  <span className="font-semibold text-slate-700">
                    {criterion.score}/{criterion.max}
                  </span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-700"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />

                </div>

                <p className="mt-2 text-sm italic leading-6 text-slate-500">
                  {criterion.description}
                </p>

              </div>
            );

          })}

        </div>

      </div>
    </div>
  );
}