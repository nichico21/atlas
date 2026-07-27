"use client";

import {
  Building2,
  Globe2,
  Layers3,
  TrendingUp,
} from "lucide-react";

import type { Region } from "@/types/region";

type RegionStatsProps = {
  region: Region;
};

export default function RegionStats({
  region,
}: RegionStatsProps) {
  const stats = [
    {
      title: "Entreprises",
      value: region.companyCount,
      icon: Building2,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Nouveautés",
      value: region.newCompanies,
      icon: TrendingUp,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Pays couverts",
      value: region.countriesCovered,
      icon: Globe2,
      color: "bg-violet-100 text-violet-600",
    },
    {
      title: "Secteurs",
      value: region.sectorCount,
      icon: Layers3,
      color: "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.title}
            className="
              group
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <div className="flex items-center justify-between">
              <div
                className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  ${stat.color}
                `}
              >
                <Icon size={22} />
              </div>

              <span className="text-3xl font-bold text-slate-900">
                {stat.value}
              </span>
            </div>

            <p className="mt-4 text-sm font-medium text-slate-500">
              {stat.title}
            </p>
          </article>
        );
      })}
    </section>
  );
}