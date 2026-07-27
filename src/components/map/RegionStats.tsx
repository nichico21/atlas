"use client";

import {
  Building2,
  Globe2,
  Layers3,
  TrendingUp,
} from "lucide-react";

import type { Region } from "@/types/region";
import { ColorType } from "maplibre-gl";

type RegionStatsProps = {
  region: Region;
};

export default function RegionStats({
  region,
}: RegionStatsProps) {
  const stats = [
    {
      title: "Entreprises",
      value: `${region.companyCount}`,
      icon: Building2,
      bg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Entreprises exportatrices",
      value: `${region.exportingCompanyRate} %`,
      icon: TrendingUp,
      bg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      title: "Taux d'export",
      value: `${region.averageExportRate} %`,
      icon: Layers3,
      bg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      title: "Pays couverts",
      value: `${region.countriesCovered}`,
      icon: Globe2,
      bg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
  ];

  return (
    <section className="grid grid-cols-4 gap-2">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.title}
            className={`
            h-[120px]  
            rounded-3xl
              border
              border-slate-100
                            pt-3 pb-2 px-4
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-1
              hover:shadow-base
              ${stat.bg}
            `}
          >
            <div
              className={`
                mb-2
                flex
                justify-center
                                
              `}
            >
              <Icon size={28} className={stat.iconColor}/>  
            </div>

            <p className="text-center text-xl font-bold text-slate-900">
              {stat.value}
            </p>

            <p className="mt-1 whitespace-pre-line text-center text-xs font-medium leading-4 text-slate-600">
              {stat.title}
            </p>
          </article>
        );
      })}
    </section>
  );
}