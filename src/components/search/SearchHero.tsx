import { Search, Sparkles, CheckCircle2 } from "lucide-react";

export default function SearchHero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white px-6 py-5 shadow-sm">

      <div className="grid grid-cols-[1.3fr_0.9fr] gap-10 items-center">

        {/* Partie gauche */}

        <div>

          <div className="mb-6 flex items-center gap-6">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">

              <Search
                className="h-8 w-8 text-blue-600"
                strokeWidth={2}
              />

            </div>

            <div>

              <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900">

                Trouvez les meilleurs

                <br />

                <span className="text-blue-600">
                  fournisseurs français
                </span>

              </h1>

            </div>

          </div>

          <p className="max-w-3xl text-xl leading-relaxed text-slate-600">

            Décrivez le besoin de votre acheteur international
            ou utilisez des filtres avancés. French Supplier Finder identifie automatiquement
            les entreprises françaises les plus pertinentes.

          </p>

        </div>

        {/* Carte IA */}

        <div className="rounded-3xl border border-blue-100 bg-blue-50/50 p-7">

          <div className="mb-6 flex items-center gap-3">

            <Sparkles
              className="h-6 w-6 text-blue-600"
            />

            <h3 className="text-xl font-bold text-blue-700">

              Notre moteur intelligent analyse

            </h3>

          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3">

            {[
              "Secteurs d'activité",
              "Expérience internationale",
              "Technologies & expertises",
              "Zones géographiques",
              "Taille et capacités",
              "Références & certifications",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <CheckCircle2
                  className="h-5 w-5 text-blue-600"
                />

                <span className="text-slate-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}