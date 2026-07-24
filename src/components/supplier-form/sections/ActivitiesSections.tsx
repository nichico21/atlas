import FormGrid from "@/components/shared/FormGrid";

import SelectField from "@/components/shared/SelectField";
import SearchField from "@/components/shared/SearchField";
import CheckboxGroup from "@/components/shared/CheckboxGroup";

export default function ActivitiesSection() {
  return (
    <div className="space-y-8">

      <div className="grid grid-cols-[1fr_1fr] gap-8">

        <div className="space-y-6">

          <SelectField
            label="Secteur(s) d'activité principal(aux)"
            required
            placeholder="Sélectionner un ou plusieurs secteurs"
            options={[
              "Énergie",
              "Industrie",
              "Transport",
              "Construction",
              "Numérique",
              "Santé",
              "Environnement",
            ]}
          />

          <SelectField
            label="Sous-secteur(s)"
            required
            placeholder="Sélectionner un ou plusieurs sous-secteurs"
            options={[
              "Production d'électricité",
              "Nucléaire",
              "Hydrogène",
              "Rail",
              "Digital",
              "Oil & Gas",
            ]}
          />

          <SearchField
            label="Métiers / Capacités clés"
            required
            placeholder="Rechercher une capacité"
          />

          <CheckboxGroup
            label="ou sélectionner parmi les plus fréquentes"
            columns={2}
            options={[
              "Ingénierie",
              "Études & Conseil",
              "Fabrication d'équipements",
              "Gestion de projet",
              "Intégration de systèmes",
              "Formation",
              "Logiciels & Solutions numériques",
              "Recherche & Développement",
              "Services & Maintenance",
              "Logistique & Supply Chain",
              "Installation & Mise en service",
              "Autre",
            ]}
          />

        </div>

        <div>

          <CheckboxGroup
            label="Type d'offre"
            required
            columns={2}
            options={[
              "Produit / Équipement",
              "Ingénierie / Études",
              "Service",
              "Intégration de systèmes",
              "Logiciel / Solution numérique",
              "Formation",
              "Autre",
            ]}
          />

        </div>

      </div>

    </div>
  );
}