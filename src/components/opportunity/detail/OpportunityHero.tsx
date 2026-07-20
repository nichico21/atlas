import {
  Building2,
  Calendar,
  CircleDollarSign,
  MapPin,
} from "lucide-react";

import { Opportunity } from "@/types/opportunity";

import { formatAmount } from "@/formatters/formatAmount";
import { formatCountry } from "@/formatters/formatCountry";
import { formatSector } from "@/formatters/formatSector";
import { formatStage } from "@/formatters/formatStage";

type OpportunityHeroProps = {
  opportunity: Opportunity;
};

export default function OpportunityHero({
  opportunity,
}: OpportunityHeroProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <img
        src="https://picsum.photos/1600/500"
        alt={opportunity.title}
        className="h-80 w-full object-cover"
      />

      <div className="space-y-8 p-8">

        <div className="flex flex-wrap gap-3">

          <span className="rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold uppercase text-violet-700">
            {formatSector(opportunity.sector)}
          </span>

          {opportunity.strategic && (
            <span className="rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700">
              🇫🇷 Prioritaire
            </span>
          )}

          <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-700">
            {formatCountry(opportunity.country)}
          </span>

        </div>

        <div>

          <h1 className="text-5xl font-black tracking-tight text-slate-900">
            {opportunity.title}
          </h1>

          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-slate-600">
            {opportunity.description}
          </p>

        </div>

        <div className="grid grid-cols-4 gap-6">

          <HeroStat
            icon={<CircleDollarSign size={22} />}
            title="Budget"
            value={formatAmount(opportunity.amount)}
          />

          <HeroStat
            icon={<Building2 size={22} />}
            title="Buyer"
            value={opportunity.buyer}
          />

          <HeroStat
            icon={<Calendar size={22} />}
            title="Deadline"
            value={opportunity.deadline}
          />

          <HeroStat
            icon={<MapPin size={22} />}
            title="Stage"
            value={formatStage(opportunity.stage)}
          />

        </div>

      </div>

    </section>
  );
}

type HeroStatProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

function HeroStat({
  icon,
  title,
  value,
}: HeroStatProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">

      <div className="rounded-xl bg-violet-100 p-3 text-violet-700">
        {icon}
      </div>

      <div>

        <p className="text-sm text-slate-500">
          {title}
        </p>

        <p className="text-lg font-bold text-slate-900">
          {value}
        </p>

      </div>

    </div>
  );
}