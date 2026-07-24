
import FormSection from "@/components/shared/FormSection";

import GeneralInformationSection from "./sections/GeneralInformationSection";
import ActivitiesSection from "./sections/ActivitiesSections";
import ReferencesSection from "./sections/ReferencesSection";
import MarketsSection from "./sections/MarketsSection";
import CertificationsSection from "./sections/CertificationsSection";
import CommercialSection from "./sections/CommercialSection";
import AdministrativeSection from "./sections/AdministrativeSection";
import DocumentsSection from "./sections/DocumentsSection";

export default function SupplierForm() {
  return (
    <div className="space-y-8">

      <FormSection
        id="general"
        number={1}
        title="Informations générales"
        color="blue"
      >
        <GeneralInformationSection />
      </FormSection>

      <FormSection
        id="activities"
        number={2}
        title="Activités et capacités"
        color="blue"
      >
        <ActivitiesSection/>
      </FormSection>

      <FormSection
        id="references"
        number={3}
        title="Références et expérience"
        color="blue"
      >
         <ReferencesSection />
      </FormSection>

      <FormSection
        id="markets"
        number={4}
        title="Marchés et présence internationale"
        color="blue"
      >
        <MarketsSection />
      </FormSection>

      <FormSection
        id="certifications"
        number={5}
        title="Certifications et labels"
        color="blue"
      >
        <CertificationsSection />
      </FormSection>

      <FormSection
        id="commercial"
        number={6}
        title="Informations commerciales"
        color="blue"
      >
        <CommercialSection />
      </FormSection>

      <FormSection
        id="documents"
        number={7}
        title="Médias et documents"
        color="blue"
      >
        <DocumentsSection />
      </FormSection>

      <FormSection
        id="administrative"
        number={8}
        title="Informations administratives"
        color="blue"
      >
         <AdministrativeSection />
      </FormSection>

    </div>
  );
}