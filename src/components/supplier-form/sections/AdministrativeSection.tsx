import TextField from "@/components/shared/TextField";
import SelectField from "@/components/shared/SelectField";

export default function AdministrativeSection() {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_0.8fr_0.8fr] gap-4">

      <TextField
        label="Siège social"
        required
        placeholder="Adresse complète du siège social"
      />

      <SelectField
        label="Pays"
        placeholder="Sélectionner un pays"
        options={[
          "France",
          "Belgique",
          "Luxembourg",
          "Suisse",
          "Allemagne",
          "Espagne",
          "Italie",
        ]}
      />

      <TextField
        label="Région"
        placeholder="Ex. : Île-de-France"
      />

      <TextField
        label="Code postal"
        placeholder="Ex. : 75008"
      />

      <TextField
        label="Ville"
        required
        placeholder="Ex. : Paris"
      />

    </div>
  );
}