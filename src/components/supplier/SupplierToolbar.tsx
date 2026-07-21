"use client";

import ViewToggle from "@/components/shared/ViewToggle";

type SupplierToolbarProps = {
  view: "map" | "list";
  onViewChange: (view: "map" | "list") => void;
};

export default function SupplierToolbar({
  view,
  onViewChange,
}: SupplierToolbarProps) {
  return (
    <ViewToggle
      view={view}
      onViewChange={onViewChange}
      accentColor="blue"
    />
  );
}