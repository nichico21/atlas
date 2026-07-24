import OpportunityForm from "@/components/opportunity-form/OpportunityForm";
import ProgressSidebar from "@/components/opportunity-form/ProgressSidebar";
import SectionObserver from "@/components/opportunity-form/SectionObserver";
import StickyActions from "@/components/shared/StickyActions";

import { OpportunityFormProvider } from "@/context/OpportunityFormContext";

export default function NewOpportunityPage() {
  return (
    <OpportunityFormProvider>
      <SectionObserver />

      <main className="min-h-screen bg-slate-50">

        <section className="border-b bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">

            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                Nouvelle opportunité internationale
              </h1>

              <p className="mt-2 text-lg text-slate-500">
                Saisissez les informations détaillées de l'opportunité afin de
                faciliter le matching avec les entreprises françaises.
              </p>
            </div>

            <div className="flex gap-4">

             

            </div>

          </div>
        </section>

        <section className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_360px] items-start gap-8 px-8 py-10">

          <OpportunityForm />

         <div className="sticky top-24 space-y-5">

  <StickyActions color="violet" publishLabel="Publier l'opportunité" />

  <ProgressSidebar />

</div>

        </section>

      </main>

    </OpportunityFormProvider>
  );
}