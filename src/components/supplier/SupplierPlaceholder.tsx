import { Building2 } from "lucide-react";

export default function SupplierPlaceholder() {
  return (
    <div className="flex h-[550px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white text-center">
      <Building2
        size={56}
        className="text-slate-300"
      />

      <h3 className="mt-6 text-xl font-semibold text-slate-800">
        Carte des entreprises
      </h3>

      <p className="mt-2 max-w-md text-slate-500">
        Cette zone accueillera prochainement la carte interactive des
        entreprises françaises, avec un affichage par région,
        secteur et expertise.
      </p>
    </div>
  );
}