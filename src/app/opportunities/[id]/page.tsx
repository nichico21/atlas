import { notFound } from "next/navigation";

import { opportunities } from "@/data/opportunities";
import OpportunityHero from "@/components/opportunity/detail/OpportunityHero";

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
    className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-violet-600"
  >
    <ArrowLeft size={18} />
    Retour aux opportunités
  </Link>
</div>
        <OpportunityHero opportunity={opportunity} />
      </div>
    </main>
  );
}