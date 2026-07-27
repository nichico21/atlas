"use client";

import { useEffect, useState } from "react";

import type { Region } from "@/types/region";

type SectorBreakdownProps = {
  region: Region;
};

export default function SectorBreakdown({
  region,
}: SectorBreakdownProps) {
  const [animatedValues, setAnimatedValues] = useState<number[]>([]);

  const sectors = [...region.sectors].sort(
    (a, b) => b.percentage - a.percentage
  );

  useEffect(() => {
    let animationFrame: number;
    let start: number | null = null;

    const duration = 700;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;

      const progress = Math.min(
        (timestamp - start) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setAnimatedValues(
        sectors.map((sector) => sector.percentage * eased)
      );

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      }
    };

    setAnimatedValues(sectors.map(() => 0));

    animationFrame =
      requestAnimationFrame(animate);

    return () =>
      cancelAnimationFrame(animationFrame);
  }, [region]);

  return (
    <section className="space-y-6">

      <div>

        <h3 className="text-lg font-semibold text-slate-900">
          Répartition sectorielle
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Répartition des entreprises par secteur
          d'activité.
        </p>

      </div>

      <div className="space-y-5">

        {sectors.map((sector, index) => (

          <div
            key={sector.id}
            className="space-y-2"
          >

            <div className="flex items-center justify-between">

              <div>

                <div className="font-medium text-slate-800">
                  {sector.name}
                </div>

                <div className="text-sm text-slate-500">
                  {sector.companyCount} entreprises
                </div>

              </div>

              <div className="text-sm font-semibold text-slate-700">
                {sector.percentage} %
              </div>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200">

              <div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-blue-700
                  transition-[width]
                "
                style={{
                  width: `${animatedValues[index] ?? 0}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}