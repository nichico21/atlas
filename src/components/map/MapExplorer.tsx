"use client";

import { useState } from "react";

import InteractiveMap from "./InteractiveMap";
import RegionDrawer from "./RegionDrawer";

import { regions } from "@/data/map/regions";
import type { Region } from "@/types/region";

export default function MapExplorer() {
  const [selectedRegion, setSelectedRegion] =
    useState<Region | null>(null);

  return (
    <div
      className="
        flex
        flex-col
        gap-6

        xl:flex-row
      "
    >
      {/* Carte */}

      <div className="flex-1">
        <InteractiveMap />
      </div>

      {/* Drawer */}

      
    </div>
  );
}