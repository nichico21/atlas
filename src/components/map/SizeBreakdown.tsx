"use client";

import type { Region } from "@/types/region";

type SizeBreakdownProps = {
  region: Region;
};

export default function SizeBreakdown({
  region,
}: SizeBreakdownProps) {
  // Valeurs fictives pour le moment
  const sizes = [
    {
      label: "PME",
      percentage: 35,
      color: "bg-blue-600",
    },
    {
      label: "ETI",
      percentage: 27,
      color: "bg-emerald-500",
    },
    {
      label: "Grandes entreprises",
      percentage: 38,
      color: "bg-amber-500",
    },
  ];

  return (
    <section className="space-y-2">

      <div className="flex items-center justify-between">

        <h3 className="text-base font-bold text-slate-900">
          Répartition par taille
        </h3>

      </div>

      {/* Barre */}

      <div className="overflow-hidden rounded-full">

        <div className="flex h-7 overflow-hidden rounded-full">

          {sizes.map((size) => (

            <div
              key={size.label}
              className={`
                ${size.color}
                flex
                items-center
                justify-center
                text-sm
                font-bold
                text-white
              `}
              style={{
                width: `${size.percentage}%`,
              }}
            >
              {size.percentage} %
            </div>

          ))}

        </div>

      </div>

      {/* Légende */}

      <div className="flex">

        {sizes.map((size) => (

          <div
            key={size.label}
            className="text-center text-sm font-semibold text-slate-700"
            style={{
              width: `${size.percentage}%`,
            }}
          >
            {size.label}
          </div>

        ))}

      </div>

    </section>
  );
}