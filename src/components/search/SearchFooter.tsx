import {
  ShieldCheck,
  Lock,
  Users,
} from "lucide-react";

export default function SearchFooter() {
  return (
    <section className="grid gap-4 md:grid-cols-3">

      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
          <ShieldCheck
            className="h-6 w-6 text-blue-600"
            strokeWidth={2}
          />
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Données vérifiées
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Informations validées par les équipes Team France Export et nos partenaires.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
          <Lock
            className="h-6 w-6 text-blue-600"
            strokeWidth={2}
          />
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Confidentialité garantie
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Vos recherches restent confidentielles et ne sont jamais partagées avec les entreprises.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
          <Users
            className="h-6 w-6 text-blue-600"
            strokeWidth={2}
          />
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Accompagnement dédié
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Les équipes Team France Export peuvent vous accompagner dans l'identification des fournisseurs les plus adaptés.
          </p>
        </div>
      </div>

    </section>
  );
}