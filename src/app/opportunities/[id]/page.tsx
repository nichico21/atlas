import { notFound } from "next/navigation";

import { opportunities } from "@/data/opportunities";
import OpportunityHero from "@/components/opportunity/detail/OpportunityHero";
import OpportunityOverview from "@/components/opportunity/detail/overview/OpportunityOverview";
import OpportunitySupplierMatches from "@/components/opportunity/detail/OpportunitySupplierMatches";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type OpportunityPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OpportunityPage({
  params,
}: OpportunityPageProps) {
  const { id } = await params;

  const opportunity = opportunities.find(
    (o) => o.id === id
  );

  if (!opportunity) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6">
  <Link
  href="/opportunities"
  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
>
  <ArrowLeft size={16} />
  Retour aux opportunités
</Link>
</div>
        <div className="space-y-8">
        <OpportunityHero opportunity={opportunity} />
        <OpportunityOverview opportunity={opportunity} />
        <OpportunitySupplierMatches
  opportunityId={opportunity.id}
/>
</div>
      </div>
    </main>
  );
}