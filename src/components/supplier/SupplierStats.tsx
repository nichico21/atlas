import {
  BriefcaseBusiness,
  Globe,
  Link2,
  Percent,
  Sparkles,
} from "lucide-react";
import { Company } from "@/types/company";

function computeStats(companies: Company[]) {
  const sectorSet = new Set(companies.flatMap((c) => c.sectors));
  const countrySet = new Set(companies.flatMap((c) => c.countries));

  const rates = companies
    .map((c) => c.exportRevenueSharePercent)
    .filter((v): v is number => typeof v === "number");
  const avgExportRate = rates.length > 0
    ? Math.round(rates.reduce((a, b) => a + b, 0) / rates.length)
    : 0;

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const recentCount = companies.filter(
    (c) => c.lastUpdated && new Date(c.lastUpdated) >= thirtyDaysAgo
  ).length;

  return [
    { title: "Entreprises", value: String(companies.length), icon: BriefcaseBusiness },
    { title: "Secteurs", value: String(sectorSet.size), icon: Globe },
    { title: "Pays d'export", value: String(countrySet.size), icon: Link2 },
    { title: "Taux moyen d'export", value: `${avgExportRate} %`, icon: Percent },
    { title: "Nouveaux référencements", value: String(recentCount), icon: Sparkles },
  ];
}

export default function SupplierStats({ companies }: { companies: Company[] }) {
  const stats = computeStats(companies);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3">
      <div className="grid grid-cols-5">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900 text-white">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-500">{stat.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}