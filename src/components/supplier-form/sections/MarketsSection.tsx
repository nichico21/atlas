import SearchField from "@/components/shared/SearchField";
import TextField from "@/components/shared/TextField";
import FileUploadZone from "@/components/shared/FileUploadZone";
import CheckboxGroup from "@/components/shared/CheckboxGroup";

export default function MarketsSection() {
  return (
    <div className="grid grid-cols-3 gap-8">

      {/* Colonne 1 */}

      <div className="space-y-6">

        <SearchField
          label="Pays d'export principaux"
          required
          placeholder="Rechercher un pays"
        />

        <TextField
          label="Nombre de pays couverts"
          placeholder="Ex. : 45"
        />

        <CheckboxGroup
          label="Langues de travail"
          columns={2}
          options={[
            "Français",
            "Anglais",
            "Arabe",
            "Espagnol",
            "Allemand",
            "Autre",
          ]}
        />

      </div>

      {/* Colonne 2 */}

            <CheckboxGroup
        label="Zones géographiques d'intervention"
        required
        columns={1}
        options={[
          "Afrique",
          "Moyen-Orient",
          "Asie",
          "Europe",
          "Amériques",
          "Océanie",
        ]}
      />

      {/* Colonne 3 */}

<div className="space-y-6">

        <FileUploadZone
          label="Implantations à l'étranger"
        />

        
      </div>


    </div>
  );
}