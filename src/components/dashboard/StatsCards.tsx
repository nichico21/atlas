import {
  Globe,
  Search,
  FolderPlus,
  Building2,
  ChevronDown,
} from "lucide-react";

const stats = [
  {
    value: "48",
    label: "Opportunités saisies",
    icon: Globe,
    color: "bg-emerald-500",
  },
  {
    value: "23",
    label: "Matchings réalisés",
    icon: Search,
    color: "bg-blue-500",
  },
  {
    value: "12",
    label: "Entreprises ajoutées",
    icon: FolderPlus,
    color: "bg-orange-500",
  },
  {
    value: "156",
    label: "Entreprises actives",
    icon: Building2,
    color: "bg-indigo-500",
  },
];

export default function StatsCards() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-900">
          Chiffres clés
        </h2>

        <button className="flex items-center gap-1 font-semibold text-blue-600 transition hover:text-blue-700">
          Ce mois-ci
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-5">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                group-hover:border-blue-200
              "
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${stat.color}`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>

              <div className="text-3xl font-bold text-slate-900">
                {stat.value}
              </div>

              <div className="mt-2 text-lg text-slate-500">
                {stat.label}
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}