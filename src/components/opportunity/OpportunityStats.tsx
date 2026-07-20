import {
  BriefcaseBusiness,
  Globe,
  Link2,
  Percent,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    title: "Opportunités identifiées",
    value: "856",
    icon: BriefcaseBusiness,
  },
  {
    title: "Pays couverts",
    value: "62",
    icon: Globe,
  },
  {
    title: "Montant total estimé",
    value: "320 Md €",
    icon: Link2,
  },
  {
    title: "Avec financement MDB",
    value: "48 %",
    icon: Percent,
  },
  {
    title: "Nouvelles cette semaine",
    value: "112",
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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-900 text-white">
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