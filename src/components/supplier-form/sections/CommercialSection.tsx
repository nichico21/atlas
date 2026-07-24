import FormGrid from "@/components/shared/FormGrid";

import SelectField from "@/components/shared/SelectField";
import TextField from "@/components/shared/TextField";
import TextAreaField from "@/components/shared/TextAreaField";

export default function CommercialSection() {
  return (
    <div className="space-y-6">

      <div className="grid grid-cols-4 gap-6">

        <SelectField
          label="Contact principal"
          required
          placeholder="Sélectionner un contact"
          options={[
            "Président",
            "Directeur Général",
            "Directeur Export",
            "Responsable Commercial",
            "Autre",
          ]}
        />

        <TextField
          label="Fonction"
          placeholder="Ex. : Directeur Export"
        />

        <TextField
          label="Email"
          required
          placeholder="exemple@societe.com"
        />

        <TextField
          label="Téléphone"
          required
          placeholder="Ex. : +33 1 23 45 67 89"
        />

      </div>

      <TextAreaField
        label="Proposition de valeur clé"
        placeholder="En une phrase, quelle est la proposition de valeur de votre entreprise ?"
        rows={3}
      />

    </div>
  );
}