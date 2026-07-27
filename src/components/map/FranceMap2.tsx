"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import type { Region } from "@/types/region";

type FranceMapProps = {
  regions: Region[];
  selectedRegion?: Region | null;
  onRegionClick?: (region: Region) => void;
};

type MarkerRef = {
  marker: maplibregl.Marker;
  element: HTMLDivElement;
};

export default function FranceMap({
  regions,
  selectedRegion,
  onRegionClick,
}: FranceMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);

  const map = useRef<maplibregl.Map | null>(null);

  const markers = useRef<Map<string, MarkerRef>>(
    new Map()
  );