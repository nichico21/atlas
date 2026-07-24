import FormSection from "../shared/FormSection";

import FormGrid from "@/components/shared/FormGrid";
import TextField from "@/components/shared/TextField";
import SelectField from "@/components/shared/SelectField";
import DateField from "@/components/shared/DateField";
import CheckboxGroup from "@/components/shared/CheckboxGroup";
import TextAreaField from "@/components/shared/TextAreaField";
import SearchField from "@/components/shared/SearchField";
import FileUploadZone from "@/components/shared/FileUploadZone";

export default function OpportunityForm() {
  return (
    <div className="space-y-8">

      <FormSection
        number={1}
        id="general"
        title="Informations générales"
      >

        <FormGrid>

          <TextField
            label="Titre de l'opportunité"
            required
            placeholder="Ex. : Construction d'une centrale solaire photovoltaïque"
          />

          <TextField
            label="Référence interne"
            placeholder="Ex. : KSA-2025-0123"
          />

          <SelectField
            label="Pays"
            required
            placeholder="Sélectionner un pays"
            options={[
              "Arabie saoudite",
              "Émirats arabes unis",
              "Maroc",
              "Égypte",
              "Brésil",
              "Inde",
            ]}
          />

          <div className="grid grid-cols-2 gap-4">

            <DateField
              label="Date de publication"
            />

            <DateField
              label="Date limite de réponse"
            />

          </div>

          <TextField
            label="Ville / Région"
            placeholder="Ex. : Dubaï, Région de Riyad"
          />

          <div className="space-y-6">

            <CheckboxGroup
              label="Type d'opportunité"
              required
              options={[
                "Projet identifié",
                "Expression d'intérêt",
                "Appel d'offres publié",
                "Autre",
                "Appel d'offres à venir",
              ]}
            />

            <SelectField
              label="Statut"
              options={[
                "Brouillon",
                "Publié",
                "Archivé",
              ]}
            />

          </div>

        </FormGrid>

      </FormSection>

      <FormSection
      id="description"
  number={2}
  title="Description du projet"
>

  <FormGrid>

    <TextAreaField
      label="Description détaillée"
      required
      placeholder="Décrivez le projet, ses objectifs, son contexte, ses enjeux..."
      rows={6}
    />

    <CheckboxGroup
      label="Étape actuelle du projet"
      options={[
        "Étude de faisabilité",
        "Avant-projet",
        "Conception",
        "Pré-qualification des fournisseurs",
        "Appel d'offres",
        "Négociation",
        "Autre",
      ]}
      columns={1}
    />

    <TextAreaField
      label="Contexte et objectifs"
      placeholder="Quels sont les objectifs principaux de ce projet ?"
      rows={4}
    />

    <TextAreaField
      label="Informations complémentaires"
      placeholder="Toute information utile pour comprendre le projet..."
      rows={4}
    />

  </FormGrid>

</FormSection>

<FormSection
  id="needs"
  number={3}
  title="Secteurs et besoins"
>

  <FormGrid>

    <SelectField
      label="Secteur principal"
      required
      placeholder="Sélectionner un secteur"
      options={[
        "Énergie",
        "Transport",
        "Défense",
        "Numérique",
        "Santé",
      ]}
    />

    <SearchField
      label="Besoins spécifiques (capacités recherchées)"
      required
      placeholder="Rechercher une capacité dans le référentiel"
    />

    <SelectField
      label="Sous-secteurs concernés"
      required
      placeholder="Sélectionner un ou plusieurs sous-secteurs"
      options={[
        "Production d'électricité",
        "Nucléaire",
        "Transport ferroviaire",
        "Hydrogène",
      ]}
    />

    <CheckboxGroup
      label="Ou sélectionner parmi les plus fréquentes"
      columns={2}
      options={[
        "Production d'électricité",
        "Industrie & Équipements",
        "Réseaux électriques",
        "Sécurité & Défense",
        "Réseaux de transport",
        "Environnement",
        "Eau & Assainissement",
        "Nucléaire",
        "Bâtiment & Infrastructures",
        "Oil & Gas",
        "Énergie renouvelable",
        "Mines & Métallurgie",
        "Digital & IT",
        "Autre",
        "Santé",
        "Éducation",
      ]}
    />

    <SelectField
      label="Principales catégories de besoins"
      required
      placeholder="Sélectionner une ou plusieurs catégories"
      options={[
        "Ingénierie",
        "Équipements",
        "Construction",
        "Maintenance",
      ]}
    />

  </FormGrid>

</FormSection>

<FormSection
 id="commercial"
  number={4}
  title="Informations commerciales"
>

  <div className="space-y-8">

    <div className="grid grid-cols-3 gap-6">

      <SelectField
        label="Montant estimé du projet"
        placeholder="Sélectionner une tranche"
        options={[
          "< 1 M€",
          "1 à 5 M€",
          "5 à 20 M€",
          "20 à 100 M€",
          "> 100 M€",
        ]}
      />

      <SelectField
        label="Devise"
        placeholder="Sélectionner"
        options={[
          "EUR",
          "USD",
          "GBP",
          "SAR",
          "AED",
        ]}
      />

      <SelectField
        label="Durée du projet"
        placeholder="Sélectionner une tranche"
        options={[
          "< 1 an",
          "1 à 3 ans",
          "3 à 5 ans",
          "> 5 ans",
        ]}
      />

    </div>

    <div className="grid grid-cols-3 gap-6">

      <CheckboxGroup
        label="Modèle de contrat envisagé"
        columns={1}
        options={[
          "EPC / Clé en main",
          "Fourniture d'équipements",
          "Prestations de services",
        ]}
      />

      <CheckboxGroup
        label=" "
        columns={1}
        options={[
          "Partenariat / Joint-venture",
          "Concession",
          "Autre",
        ]}
      />

      <CheckboxGroup
        label="Type d'acheteur"
        required
        columns={1}
        options={[
          "Public",
          "Parapublic",
          "Privé",
          "Mixte",
        ]}
      />

    </div>

    <TextField
      label="Entité acheteuse"
      placeholder="Nom de l'entité"
    />

  </div>

</FormSection>

<FormSection
 id="markets"
  number={5}
  title="Marchés et localisation"
>

  <div className="space-y-8">

    <div className="grid grid-cols-3 gap-6">

      <SelectField
        label="Pays d'exécution"
        required
        placeholder="Sélectionner un ou plusieurs pays"
        options={[
          "Arabie saoudite",
          "Émirats arabes unis",
          "Maroc",
          "Égypte",
          "Brésil",
        ]}
      />

      <SelectField
        label="Région"
        placeholder="Sélectionner une région"
        options={[
          "Europe",
          "Afrique",
          "Moyen-Orient",
          "Asie",
        ]}
      />

      <TextField
        label="Localisation précise"
        placeholder="Ville, zone industrielle, site..."
      />

    </div>

    <SelectField
      label="Marchés d'export ciblés pour les fournisseurs"
      required
      placeholder="Sélectionner un ou plusieurs marchés"
      options={[
        "Énergie",
        "Défense",
        "Transports",
        "Construction",
        "Numérique",
      ]}
    />

  </div>

</FormSection>

<FormSection
  id="criteria"
  number={6}
  title="Exigences et critères de sélection"
>

  <div className="grid grid-cols-4 gap-8">

    <CheckboxGroup
      label="Critères techniques et métiers"
      columns={1}
      options={[
        "Expérience sectorielle",
        "Références similaires",
        "Certifications requises",
        "Capacités technologiques",
        "Capacité à travailler en consortium",
        "Autre",
      ]}
    />

    <CheckboxGroup
      label="Exigences financières"
      columns={1}
      options={[
        "Capacité financière",
        "Assurance / Garanties",
        "Financement du projet",
        "Autre",
      ]}
    />

    <CheckboxGroup
      label="Exigences RSE et environnementales"
      columns={1}
      options={[
        "Environnement",
        "Social",
        "Gouvernance",
        "Autre",
      ]}
    />

    <CheckboxGroup
      label="Langues de travail requises"
      required
      columns={1}
      options={[
        "Français",
        "Anglais",
        "Arabe",
        "Espagnol",
        "Autre",
      ]}
    />

  </div>

</FormSection>

<FormSection
id="financing"
  number={7}
  title="Financement et bailleurs"
>

  <div className="grid grid-cols-3 gap-8">

    <CheckboxGroup
      label="Montage financier envisagé"
      columns={1}
      options={[
        "Fonds propres",
        "Dette bancaire",
        "Financement export (ECA)",
        "Financement multilatéral",
        "PPP",
        "Autre",
      ]}
    />

    <CheckboxGroup
      label="Bailleurs impliqués ou envisagés"
      columns={2}
      options={[
        "Banque mondiale",
        "BERD",
        "BAD",
        "AIIB",
        "BID",
        "Banques commerciales",
        "BEI",
        "Fonds souverains",
        "AFD",
        "Autre",
      ]}
    />

    <div className="space-y-8">

      <CheckboxGroup
        label="Besoin d'appui de la Team France Export ?"
        columns={2}
        options={[
          "Oui",
          "Non",
        ]}
      />

      <TextAreaField
        label="Commentaires"
        placeholder="Précisez vos besoins d'accompagnement..."
        rows={4}
      />

    </div>

  </div>

</FormSection>

<FormSection
id="documents"
  number={8}
  title="Documents et pièces jointes"
>

  <div className="grid grid-cols-2 gap-8">

    <FileUploadZone
      label="Documents liés au projet"
    />

    <FileUploadZone
      label="Autres documents utiles"
    />

  </div>

</FormSection>

    </div>
  );
}