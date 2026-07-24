import FormGrid from "@/components/shared/FormGrid";

import SearchField from "@/components/shared/SearchField";
import CheckboxGroup from "@/components/shared/CheckboxGroup";

export default function CertificationsSection() {
  return (
    <FormGrid>

      <div>

        <SearchField
          label="Certifications"
          placeholder="Rechercher une certification"
        />

        <CheckboxGroup
          label="ou sélectionner parmi les plus courantes"
          columns={2}
          options={[
            "ISO 9001",
            "Qualiopi",
            "ISO 14001",
            "CE",
            "ISO 45001",
            "Autre",
            "ISO 27001",
          ]}
        />

      </div>

      <div>

        <SearchField
          label="Labels / Agréments"
          placeholder="Rechercher un label ou agrément"
        />

        <CheckboxGroup
          label="ou sélectionner"
          columns={2}
          options={[
            "Origine France Garantie",
            "Ecovadis",
            "French Fab",
            "RSE / ESG",
            "Entreprise Innovante",
            "Autre",
            "PEA / PME / ETI",
          ]}
        />

      </div>

    </FormGrid>
  );
}