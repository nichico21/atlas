"use client";

import FormSectionObserver from "@/components/shared/FormSectionObserver";
import { opportunityFormSections } from "@/data/opportunityFormSections";

export default function SectionObserver() {
  return (
    <FormSectionObserver
      sections={opportunityFormSections}
    />
  );
}