import { Opportunity } from "@/types/opportunity";
import { getOpportunityImage } from "@/lib/getOpportunityImage";
import {
  Building2,
  Calendar,
  CircleDollarSign,
  MapPin,
} from "lucide-react";

type OpportunityCardProps = {
  opportunity: Opportunity;
};

export default function OpportunityCard({
  opportunity,
}: OpportunityCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}

      <div className="relative h-52 bg-slate-200">

        <img
          src="https://picsum.photos/800/600"
          alt={opportunity.title}
          className="h-full w-full object-cover"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-600">
          {opportunity.sector}
        </span>

      </div>

      {/* Contenu */}

      <div className="space-y-5 p-6">

        <div>

          <h3 className="text-2xl font-bold text-slate-900">
            {opportunity.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {opportunity.description}
          </p>

        </div>

        {/* Badges */}

        <div className="flex flex-wrap gap-2">

          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
            {opportunity.stage}
          </span>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            {opportunity.amount} M€
          </span>

          {opportunity.strategic && (
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              Prioritaire 🇫🇷
            </span>
          )}

        </div>

        <div className="space-y-3 text-sm">

          <div className="flex items-center gap-3">

            <MapPin size={16} />

            <span>{opportunity.country}</span>

          </div>

          <div className="flex items-center gap-3">

            <Building2 size={16} />

            <span>{opportunity.buyer}</span>

          </div>

          <div className="flex items-center gap-3">

            <CircleDollarSign size={16} />

            <span>{opportunity.lender}</span>

          </div>

          <div className="flex items-center gap-3">

            <Calendar size={16} />

            <span>{opportunity.publishedAt}</span>

          </div>

        </div>

        <button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 py-3 font-semibold text-white transition hover:opacity-90">

          Voir l'opportunité →

        </button>

      </div>

    </article>
  );
}