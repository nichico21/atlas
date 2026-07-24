"use client";

import FormSectionObserver from "@/components/shared/FormSectionObserver";
import { supplierFormSections } from "@/data/supplierFormSections";

export default function SupplierSectionObserver() {
  return (
    <FormSectionObserver
      sections={supplierFormSections}
    />
  );
}