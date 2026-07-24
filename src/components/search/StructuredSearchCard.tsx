export default function StructuredSearchCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-xl font-bold text-slate-900">
        ⚙️ Recherche structurée
      </h2>

      <p className="mt-2 text-slate-500">
        Utilisez des filtres pour cibler rapidement les fournisseurs.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-6">

        <select className="rounded-xl border border-slate-200 p-3">
          <option>Zone géographique</option>
        </select>

        <select className="rounded-xl border border-slate-200 p-3">
          <option>Taille d'entreprise</option>
        </select>

        <select className="rounded-xl border border-slate-200 p-3">
          <option>Expérience internationale</option>
        </select>

      </div>

      <div className="mt-8 flex justify-center">

        <button className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
          Lancer la recherche
        </button>

      </div>

    </div>
  );
}