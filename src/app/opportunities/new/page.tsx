import FormSection from "@/components/opportunity-form/FormSection";
import OpportunityForm from "@/components/opportunity-form/OpportunityForm";
import ProgressSidebar from "@/components/opportunity-form/ProgressSidebar";

export default function NewOpportunityPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">

          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Nouvelle opportunité internationale
            </h1>

            <p className="mt-2 text-lg text-slate-500">
              Saisissez les informations détaillées de l'opportunité afin de faciliter le matching avec les entreprises françaises.
            </p>
          </div>

          <div className="flex gap-4">

            <button className="w-45 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-xlg font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md">
              Enregistrer comme brouillon
            </button>

            <button className="w-45 rounded-2xl bg-violet-600 px-4 py-2 text-xlg font-semibold text-white shadow-sm transition-all duration-200 hover:bg-violet-700 hover:shadow-lg">
              Publier l'opportunité
            </button>

          </div>

        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_360px] items-start gap-8 px-8 py-10">

        <div>

<div>

  <OpportunityForm />

</div>

        </div>

        <ProgressSidebar
  currentSection="general"
  completedSections={[]}
/>

      </section>

    </main>
  );
}