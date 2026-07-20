import { ArrowRight } from "lucide-react";

const opportunities = [
  {
    title: "Centrale solaire photovoltaïque",
    country: "Égypte",
    sector: "Énergie",
    sectorColor: "bg-purple-100 text-purple-700",
    amount: "450 M€",
    date: "Ajoutée il y a 2 h",
  },
  {
    title: "Projet de métro – Ligne 2",
    country: "Belgrade, Serbie",
    sector: "Transport",
    sectorColor: "bg-blue-100 text-blue-700",
    amount: "1,2 Md€",
    date: "Ajoutée il y a 6 h",
  },
  {
    title: "Usine de dessalement d'eau de mer",
    country: "Arabie Saoudite",
    sector: "Eau",
    sectorColor: "bg-cyan-100 text-cyan-700",
    amount: "300 M€",
    date: "Ajoutée il y a 1 j",
  },
  {
    title: "Réseau électrique haute tension",
    country: "Côte d'Ivoire",
    sector: "Énergie",
    sectorColor: "bg-purple-100 text-purple-700",
    amount: "210 M€",
    date: "Ajoutée il y a 2 j",
  },
];

export default function RecentOpportunities() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-900">
          Opportunités récentes
        </h2>

        <button className="font-semibold text-blue-600 transition hover:text-blue-700">
          Voir toutes les opportunités
        </button>
      </div>

      <div className="divide-y divide-slate-200">

        {opportunities.map((item) => (
          <div
            key={item.title}
            className="group
    cursor-pointer
    grid
    grid-cols-[3fr_1.6fr_1fr_1fr_1.2fr_40px]
    items-center
    gap-6
    py-6
    transition-all
    duration-300
    hover:bg-slate-50"
          >
            <div className="text-xl
    font-semibold
    text-slate-900
    transition-colors
    duration-300
    group-hover:text-blue-600">
              {item.title}
            </div>

            <div className="text-slate-500">
              {item.country}
            </div>

            <span
              className={`w-fit rounded-lg px-3 py-1 text-sm font-semibold ${item.sectorColor}`}
            >
              {item.sector}
            </span>

            <div className="text-xl font-bold text-slate-900">
              {item.amount}
            </div>

            <div className="text-right text-slate-400">
              {item.date}
            </div>

            <ArrowRight className="h-5
    w-5
    text-slate-400
    transition-all
    duration-300
    group-hover:text-blue-600
    group-hover:translate-x-2" />

          </div>
        ))}

      </div>

    </div>
  );
}