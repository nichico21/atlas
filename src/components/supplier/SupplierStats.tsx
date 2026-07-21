import {
  BriefcaseBusiness,
  Globe,
  Link2,
  Percent,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    title: "Entreprises",
    value: "642",
    icon: BriefcaseBusiness,
  },
  {
    title: "Secteurs",
    value: "13",
    icon: Globe,
  },
  {
    title: "Pays d'export",
    value: "68",
    icon: Link2,
  },
  {
    title: "Taux moyen d'export",
    value: "39 %",
    icon: Percent,
  },
  {
    title: "Nouveaux référencements ",
    value: "83",
    icon: Sparkles,
  },
];

export default function OpportunityStats() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3">

      <div className="grid grid-cols-5">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900 text-white">
                <Icon size={18} />
              </div>

              <div>
                <p className="text-xl font-bold text-slate-900">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {stat.title}
                </p>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}