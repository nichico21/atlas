import FormGrid from "@/components/shared/FormGrid";

import SelectField from "@/components/shared/SelectField";
import TextField from "@/components/shared/TextField";
import FileUploadZone from "@/components/shared/FileUploadZone";
import CheckboxGroup from "@/components/shared/CheckboxGroup";

export default function ReferencesSection() {
  return (
    <FormGrid>

      <div className="space-y-6">

        <SelectField
          label="Principaux domaines d'intervention"
          required
          placeholder="Sélectionner un ou plusieurs domaines"
          options={[
            "Énergie",
            "Transport",
            "Industrie",
            "Numérique",
            "Construction",
            "Santé",
            "Environnement",
          ]}
        />

        <SelectField
          label="Taille typique des projets"
          placeholder="Sélectionner une tranche"
          options={[
            "< 1 M€",
            "1 à 5 M€",
            "5 à 20 M€",
            "20 à 100 M€",
            "> 100 M€",
          ]}
        />

      </div>

      <div className="space-y-6">

        <FileUploadZone
          label="Références clés (3 maximum)"
        />

        <TextField
          label="Nombre total de références similaires réalisées"
          placeholder="Ex. : 25"
        />

      </div>

      <CheckboxGroup
        label="Expérience internationale"
        required
        columns={2}
        options={[
          "Oui",
          "Non",
        ]}
      />

      <CheckboxGroup
        label="Expérience avec des bailleurs multilatéraux"
        columns={2}
        options={[
          "Oui",
          "Non",
        ]}
      />

      <TextField
        label="Années d'expérience à l'international"
        placeholder="Ex. : 15"
      />

      <CheckboxGroup
        label="Capacité à travailler en consortium"
        columns={2}
        options={[
          "Oui",
          "Non",
        ]}
      />

    </FormGrid>
  );
}