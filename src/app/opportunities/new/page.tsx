import FormSection from "@/components/opportunity-form/FormSection";

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

            <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium hover:bg-slate-50">
              Enregistrer comme brouillon
            </button>

            <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white hover:bg-violet-700">
              Publier l'opportunité
            </button>

          </div>

        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-[1fr_340px] gap-8 px-8 py-10">

        <div>

          <FormSection
  number={1}
  title="Informations générales"
>

  <div className="grid grid-cols-2 gap-6">

    <div>
      <label className="mb-2 block font-medium">
        Titre de l'opportunité
      </label>

      <input
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
        placeholder="Ex : Construction d'une centrale photovoltaïque"
      />
    </div>

    <div>
      <label className="mb-2 block font-medium">
        Référence interne
      </label>

      <input
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
        placeholder="Ex : KSA-2025-0123"
      />
    </div>

  </div>

</FormSection>

        </div>

        <aside className="sticky top-8 h-fit">

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <h3 className="mb-4 text-2xl font-bold">
              Récapitulatif
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 font-semibold">
                  1
                </div>

                Informations générales
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 font-semibold">
                  2
                </div>

                Description du projet
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 font-semibold">
                  3
                </div>

                Secteurs et besoins
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 font-semibold">
                  4
                </div>

                Informations commerciales
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 font-semibold">
                  5
                </div>

                Marchés et localisation
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 font-semibold">
                  6
                </div>

                Exigences et critères
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 font-semibold">
                  7
                </div>

                Financement et bailleurs
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 font-semibold">
                  8
                </div>

                Documents et pièces jointes
              </div>

            </div>

          </div>

        </aside>

      </section>

    </main>
  );
}