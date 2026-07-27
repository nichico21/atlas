"use client";

import { useEffect, useState } from "react";

import type { Region } from "@/types/region";

import {
  Building2,
  Globe2,
  Layers3,
  TrendingUp,
  Zap,
  Factory,
  Train,
  Cpu,
  Leaf,
  Heart,
  ChevronRight,
} from "lucide-react";

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


  const sectorIcons: Record<string, any> = {
  energy: Zap,
  industry: Factory,
  transport: Train,
  digital: Cpu,
  environment: Leaf,
  health: Heart,

  defense: Factory,
  mobility: Train,
  aerospace: Cpu,
  maritime: Leaf,
  construction: Factory,
};


  return (
    <section className="space-y-2">

      <div>

        <h3 className="text-base font-semibold text-slate-900">
          Répartition sectorielle
        </h3>

       
      </div>

      <div className="space-y-3">

        {sectors.map((sector, index) => {

  const Icon =
    sectorIcons[sector.id] ?? Factory;

  return (

          

          <div
  key={sector.id}
  className="grid grid-cols-[140px_1fr_40px] items-center gap-4"
>

  {/* Colonne gauche */}

  <div className="flex items-center gap-3">

    <Icon
      size={18}
      className="text-blue-600"
    />

    <span className="text-sm font-medium text-slate-700">
      {sector.name}
    </span>

  </div>

  {/* Barre */}

  <div className="h-2 overflow-hidden rounded-full bg-slate-100">

    <div
      className="h-full rounded-full bg-blue-600 transition-[width] duration-700"
      style={{
        width: `${animatedValues[index] ?? 0}%`,
      }}
    />

  </div>

  {/* Pourcentage */}

  <div className="text-right text-sm font-semibold text-slate-700">
    {sector.percentage} %
  </div>

</div>

  );
})}

      </div>

    </section>
  );
}