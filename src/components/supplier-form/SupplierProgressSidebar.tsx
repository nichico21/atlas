"use client";

import FormProgressSidebar from "@/components/shared/FormProgressSidebar";
import { supplierFormSections } from "@/data/supplierFormSections";

export default function SupplierProgressSidebar() {
  return (
    <FormProgressSidebar
      sections={supplierFormSections}
      color="blue"
    />
  );
}