import { Opportunity } from "@/types/opportunity";

type OpportunityOverviewProps = {
  opportunity: Opportunity;
};

export default function OpportunityOverview({
  opportunity,
}: OpportunityOverviewProps) {
  return (
    <section className="mt-8 space-y-6">

      {/* Première ligne */}
      <div className="grid grid-cols-12 gap-6">

        {/* Description */}
        <div className="col-span-7 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-bold text-slate-900">
            Project description
          </h2>

          <p className="leading-7 text-slate-600">
            {opportunity.description}
          </p>
        </div>

        {/* Capabilities */}
        <div className="col-span-5 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-bold text-slate-900">
            Capabilities required
          </h2>

          <div className="flex flex-wrap gap-2">

            <span className="rounded-md bg-slate-100 px-3 py-1 text-sm">
              SCADA
            </span>

            <span className="rounded-md bg-slate-100 px-3 py-1 text-sm">
              Digital Substations
            </span>

            <span className="rounded-md bg-slate-100 px-3 py-1 text-sm">
              Smart Metering
            </span>

            <span className="rounded-md bg-slate-100 px-3 py-1 text-sm">
              Grid Cybersecurity
            </span>

            <span className="rounded-md bg-slate-100 px-3 py-1 text-sm">
              BESS integration
            </span>

            <span className="rounded-md bg-slate-100 px-3 py-1 text-sm">
              EMS / DMS
            </span>

            <span className="rounded-md bg-slate-100 px-3 py-1 text-sm">
              Protection & Control
            </span>

          </div>
        </div>

      </div>

      {/* Deuxième ligne */}

      <div className="grid grid-cols-3 gap-6">

        {/* Buyer */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6">

          <h2 className="mb-6 text-lg font-bold text-slate-900">
            Buyer profile
          </h2>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span className="text-slate-500">Type</span>
              <span className="font-regular">
                Public Utility (SEC / PIF)
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Employees</span>
              <span className="font-regular">
                35,000+
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Annual revenue</span>
              <span className="font-regular">
                $14B
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Projects financed by
              </span>

              <span className="font-regular">
                PIF + MDB / ECA
              </span>
            </div>

          </div>

        </div>

        {/* Requirements */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6">

          <h2 className="mb-6 text-lg font-bold text-slate-900">
            Project requirements
          </h2>

          <ul className="space-y-3 text-sm text-slate-600 list-disc pl-5">

            <li>Références sur réseaux THT</li>
            <li>Expérience Moyen-Orient exigée</li>
            <li>Capacité pour lots &gt; 500 M€</li>
            <li>Respect du local content saoudien</li>

          </ul>

        </div>

        {/* Financing */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6">

          <h2 className="mb-6 text-lg font-bold text-slate-900">
            Financing & procurement
          </h2>

          <ul className="space-y-3 text-sm text-slate-600 list-disc pl-5">

            <li>Financement : PIF + ECA</li>
            <li>Appel d'offres international</li>
            <li>Contrat EPC</li>
            <li>Local content : oui</li>

          </ul>

        </div>

      </div>

    </section>
  );
}