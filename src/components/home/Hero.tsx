import SearchBar from "@/components/ui/SearchBar";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundColor: "#07132B",
        backgroundImage: "url('/images/world-map.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right right",
        backgroundSize: "110%",
      }}
    >
      {/* Voile sombre */}
      <div className="absolute inset-0 bg-[#07132B]/40" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 pt-6 pb-14">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
          <div className="h-2 w-2 rounded-full bg-blue-400" />

          <span className="text-sm font-semibold uppercase tracking-widest">
            Plateforme de la Team France Export
          </span>
        </div>

        {/* Titre */}
        <h1 className="mt-8 max-w-5xl text-6xl font-black leading-[0.98] tracking-tight">

          Connecter le monde

          <br />

          à l'

          <span className="text-blue-400">
            excellence industrielle
          </span>

          <br />

          française

        </h1>

        {/* Sous-titre */}
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-200">
          Identifiez les meilleures capacités françaises et répondez
          aux opportunités internationales avec efficacité.
        </p>

        {/* Barre de recherche */}
        <div className="mt-8 max-w-4xl">
          <SearchBar />
        </div>

      </div>
    </section>
  );
}