"use client";

import { X } from "lucide-react";

import DrawerHeader from "./DrawerHeader";
import RegionStats from "./RegionStats";
import SectorBreakdown from "./SectorBreakdown";
import FeaturedCompanies from "./FeaturedCompanies";
import SizeBreakdown from "./SizeBreakdown";
import type { Region } from "@/types/region";
import SearchButton from "./SearchButton";

type Props = {
  region: Region | null;
  onClose: () => void;
};

export default function RegionDrawer({
  region,
  onClose,
}: Props) {
  return (
    <aside
      className={`
        transition-all
        duration-500
        ease-in-out
        overflow-hidden

        ${
          region
            ? "w-[430px] opacity-100"
            : "w-0 opacity-0"
        }
      `}
    >
      {region && (
        <div className="h-full rounded-3xl border border-slate-200 bg-white shadow-xl">

          <DrawerHeader
            region={region}
            onClose={onClose}
          />

          <div className="space-y-5 p-4">

            <RegionStats region={region} />

            <SectorBreakdown region={region} />

            <SizeBreakdown region={region} />

            <SearchButton
  companyCount={region.companyCount}
/>

          </div>

        </div>
      )}
    </aside>
  );
}