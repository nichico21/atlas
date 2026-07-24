"use client";

import FormProgressSidebar from "@/components/shared/FormProgressSidebar";
import { opportunityFormSections } from "@/data/opportunityFormSections";

export default function ProgressSidebar() {
  return (
    <FormProgressSidebar
      sections={opportunityFormSections}
      color="violet"
    />
  );
}