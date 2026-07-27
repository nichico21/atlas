"use client";

import { useEffect, useRef } from "react";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import { loadSources } from "@/lib/map/sources";
import { loadLayers } from "@/lib/map/layers";
import { regions } from "@/data/map/regions";

import {
  FRANCE_BOUNDS,
  FRANCE_CENTER,
} from "@/lib/map/config";

import type { Region } from "@/types/region";

type InteractiveMapProps = {
  selectedRegion: Region | null;
  onRegionClick?: (region: Region) => void;
};

export default function InteractiveMap({
  selectedRegion,
  onRegionClick,
}: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const selectedMarker = useRef<HTMLElement | null>(null);

function getMarkerSize(companyCount: number) {
  if (companyCount >= 120) return 68;
  if (companyCount >= 80) return 56;
  if (companyCount >= 50) return 48;
  if (companyCount >= 20) return 42;

  return 36;
}


  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,

      style: {
        version: 8,
        sources: {},
        layers: [
          {
            id: "background",
            type: "background",
            paint: {
              "background-color": "#F8FAFC",
            },
          },
        ],
      },

      center: FRANCE_CENTER,
      zoom: 5,
    });

    map.on("load", () => {
      loadSources(map);
      loadLayers(map);
      regions.forEach((region) => {
        const size = getMarkerSize(region.companyCount);
  const marker = document.createElement("div");

  marker.innerHTML = `
    <div style="
      width:${size}px;
height:${size}px;
      border-radius:9999px;
      background:#2563EB;
      color:white;
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight:700;
      font-size:${size * 0.32}px;
      box-shadow:0 ${size / 5}px ${size / 2}px rgba(37,99,235,.28);
      border:${Math.max(3, size / 14)}px solid white;
      font-family:Inter,sans-serif;
      transition:all .25s ease;
cursor:pointer;
    ">
      ${region.companyCount}
    </div>
  `;

  const bubble = marker.firstElementChild as HTMLElement;

  const defaultBackground = "#2563EB";
const defaultShadow = `0 ${size / 5}px ${size / 2}px rgba(37,99,235,.28)`;

marker.style.cursor = "pointer";

marker.addEventListener("mouseenter", () => {
  // Ne pas animer la région déjà sélectionnée
  if (selectedMarker.current === bubble) return;

  bubble.style.transform = "scale(1.06)";
  bubble.style.boxShadow = `0 ${size / 4}px ${size * 0.7}px rgba(37,99,235,.38)`;
});

marker.addEventListener("mouseleave", () => {
  // Ne pas modifier la région sélectionnée
  if (selectedMarker.current === bubble) return;

  bubble.style.transform = "scale(1)";
  bubble.style.boxShadow = defaultShadow;
});

marker.addEventListener("click", () => {

  // Remet l'ancienne bulle à son état normal
  if (selectedMarker.current) {
    selectedMarker.current.style.transform = "scale(1)";
    selectedMarker.current.style.background = "#2563EB";
    selectedMarker.current.style.boxShadow =
      "0 12px 28px rgba(37,99,235,.28)";
  }

  // Met en valeur la nouvelle bulle
  bubble.style.transform = "scale(1.10)";
  bubble.style.background = "#1D4ED8";
  bubble.style.boxShadow =
    "0 18px 40px rgba(37,99,235,.45)";

  selectedMarker.current = bubble;

  onRegionClick?.(region);

});

  new maplibregl.Marker({
    element: marker,
  })
    .setLngLat([region.longitude, region.latitude])
    .addTo(map);
});

      map.fitBounds(FRANCE_BOUNDS, {
        padding: 50,
        duration: 0,
      });

      map.setMinZoom(map.getZoom());

      map.dragRotate.disable();
      map.touchZoomRotate.disableRotation();

      map.scrollZoom.enable();
      map.doubleClickZoom.enable();

      map.keyboard.disable();

      map.addControl(new maplibregl.NavigationControl());
    });

    return () => map.remove();
  }, [onRegionClick]);

useEffect(() => {
  if (selectedRegion) return;

  if (selectedMarker.current) {
    selectedMarker.current.style.transform = "scale(1)";
    selectedMarker.current.style.background = "#2563EB";
    selectedMarker.current.style.boxShadow = "";
    selectedMarker.current.style.outline = "0px solid transparent";

    selectedMarker.current = null;
  }
}, [selectedRegion]);

  return (
    <div
      ref={mapContainer}
      className="h-[700px] w-full overflow-hidden rounded-2xl border border-slate-200"
    />
  );
}