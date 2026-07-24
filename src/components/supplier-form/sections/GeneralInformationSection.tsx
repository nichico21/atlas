import FormGrid from "@/components/shared/FormGrid";

import TextField from "@/components/shared/TextField";
import TextAreaField from "@/components/shared/TextAreaField";
import SelectField from "@/components/shared/SelectField";
import DateField from "@/components/shared/DateField";
import FileUploadZone from "@/components/shared/FileUploadZone";
import CheckboxGroup from "@/components/shared/CheckboxGroup";

export default function GeneralInformationSection() {
  return (
    <FormGrid>

      <TextField
        label="Raison sociale"
        required
        placeholder="Ex. : Schneider Electric France"
      />

      <TextField
        label="Nom commercial"
        placeholder="Ex. : Schneider Electric"
      />

      <FileUploadZone
        label="Logo de l'entreprise"
      />

      <TextField
        label="SIREN / SIRET"
        required
        placeholder="Ex. : 123 456 789 00012"
      />

      <SelectField
        label="Code NAF"
        required
        placeholder="Sélectionner un code NAF"
        options={[
          "2611Z",
          "2712Z",
          "2829A",
          "2899B",
          "6202A",
        ]}
      />

      <div />

      <DateField
        label="Année de création"
      />

      <TextField
        label="Site web"
        placeholder="Ex. : www.societe.com"
      />

      <TextField
        label="LinkedIn"
        placeholder="Ex. : https://linkedin.com/company/..."
      />

      <TextField
        label="Autres réseaux"
        placeholder="Ex. : YouTube, X, etc."
      />

      <div />

      <div />

      <div className="col-span-2">

        <TextAreaField
          label="Présentation courte"
          required
          placeholder="Décrivez en quelques lignes l'activité principale de l'entreprise, son positionnement et ses atouts clés..."
          rows={4}
        />

      </div>

      <TextAreaField
        label="Description détaillée"
        placeholder="Décrivez plus en détail l'entreprise, ses expertises, ses différenciateurs..."
        rows={4}
      />

      <SelectField
        label="Effectif total"
        required
        placeholder="Sélectionner une tranche"
        options={[
          "1 à 9",
          "10 à 49",
          "50 à 249",
          "250 à 999",
          "1 000+",
        ]}
      />

      <SelectField
        label="Chiffre d'affaires"
        placeholder="Sélectionner une tranche"
        options={[
          "< 2 M€",
          "2 à 10 M€",
          "10 à 50 M€",
          "50 à 250 M€",
          "> 250 M€",
        ]}
      />

      <SelectField
        label="Capital"
        placeholder="Sélectionner"
        options={[
          "Privé",
          "Public",
          "Mixte",
        ]}
      />

      <CheckboxGroup
        label="Entreprise indépendante"
        columns={1}
        options={[
          "Oui",
        ]}
      />

    </FormGrid>
  );
}