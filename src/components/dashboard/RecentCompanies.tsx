import { ArrowRight } from "lucide-react";

const companies = [
  {
    name: "Schneider Electric",
    sectors: "Énergie, Digital, Industrie",
    logo: "/logos/schneider.png",
    date: "Consultée il y a 1 h",
  },
  {
    name: "Alstom",
    sectors: "Transport, Ferroviaire",
    logo: "/logos/alstom.png",
    date: "Consultée il y a 3 h",
  },
  {
    name: "Vinci Construction",
    sectors: "BTP, Infrastructures",
    logo: "/logos/vinci.png",
    date: "Consultée il y a 1 j",
  },
  {
    name: "Suez",
    sectors: "Eau, Environnement",
    logo: "/logos/suez.png",
    date: "Consultée il y a 2 j",
  },
];

export default function RecentCompanies() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-900">
          Entreprises récemment consultées
        </h2>

        <button className="font-semibold text-blue-600 transition hover:text-blue-700">
          Voir toutes les entreprises
        </button>
      </div>

      <div className="divide-y divide-slate-200">

        {companies.map((company) => (
          <div
            key={company.name}
            className="group cursor-pointer grid grid-cols-[3fr_2.4fr_1.2fr_40px] items-center gap-6 py-5 transition-colors duration-300 hover:bg-slate-50"
          >

            <div className="flex items-center gap-5">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white">

                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 w-8 object-contain"
                />

              </div>

              <span className="text-xl font-semibold text-slate-900 transition-colors
    duration-300
    group-hover:text-blue-600">
                {company.name}
              </span>

            </div>

            <div className="text-slate-500">
              {company.sectors}
            </div>

            <div className="text-right text-slate-400">
              {company.date}
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