import QuickActionCard from "./QuickActionCard";

import {
  Search,
  Building2,
  Globe,
  PlusCircle,
} from "lucide-react";

export default function QuickActions() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-10">

      <h2 className="mb-10 text-4xl font-bold">
        Accès rapides
      </h2>

      <div className="grid grid-cols-4 gap-8">

        <QuickActionCard
        href="/opportunities"
          icon={<Search className="h-6 w-6" />}
          color="bg-violet-600"
          title="Trouver la réponse adaptée à un besoin international"
          description="Rechercher les entreprises françaises les plus adaptées aux besoins d'un acheteur international."
        />

        <QuickActionCard
          href="/suppliers"
          icon={<Building2 className="h-6 w-6" />}
          title="Explorer les entreprises"
          color="bg-blue-600"
          description="Rechercher et filtrer les entreprises françaises par secteur, capacités, références et marchés."
        />

        <QuickActionCard
          href="/opportunities/new"
          icon={<Globe className="h-6 w-6" />}
          title="Saisir une nouvelle opportunité"
          color="bg-emerald-600"
          description="Enregistrer une opportunité internationale afin de lancer un matching avec les entreprises françaises."
        />

        <QuickActionCard
          icon={<PlusCircle className="h-6 w-6" />}
          title="Saisir une nouvelle entreprise française"
          color="bg-orange-500"
          description="Ajouter ou mettre à jour les informations d'une entreprise française."
        />

      </div>

    </section>
  );
}