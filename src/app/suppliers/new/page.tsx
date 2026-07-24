import SupplierForm from "@/components/supplier-form/SupplierForm";
import SupplierProgressSidebar from "@/components/supplier-form/SupplierProgressSidebar";
import SupplierSectionObserver from "@/components/supplier-form/SupplierSectionObserver";
import StickyActions from "@/components/shared/StickyActions";

import { OpportunityFormProvider } from "@/context/OpportunityFormContext";

export default function NewSupplierPage() {
  return (
    <OpportunityFormProvider>

      <SupplierSectionObserver />

      <main className="min-h-screen bg-slate-50">

        <section className="border-b bg-white">
          <div className="mx-auto max-w-7xl px-8 py-8">

            <h1 className="text-4xl font-bold text-slate-900">
              Nouveau fournisseur français
            </h1>

            <p className="mt-2 text-lg text-slate-500 max-w-4xl">
              Référencez une entreprise française afin de faciliter son matching
              avec les opportunités internationales.
            </p>

          </div>
        </section>

        <section className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_360px] items-start gap-8 px-8 py-10">

          <SupplierForm />

          <div className="sticky top-24 space-y-5">

            <StickyActions color="blue" publishLabel="Publier le fournisseur" />

            <SupplierProgressSidebar />

          </div>

        </section>

      </main>

    </OpportunityFormProvider>
  );
}