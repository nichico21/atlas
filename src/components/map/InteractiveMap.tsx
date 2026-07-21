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

type InteractiveMapProps = {
  accentColor?: "blue" | "violet";
};

export default function InteractiveMap({
  accentColor = "blue",
}: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);

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
  const marker = document.createElement("div");

  marker.innerHTML = `
    <div style="
      width:52px;
      height:52px;
      border-radius:9999px;
      background:#2563EB;
      color:white;
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight:700;
      font-size:16px;
      box-shadow:0 8px 20px rgba(37,99,235,.30);
      border:4px solid white;
      font-family:Inter,sans-serif;
    ">
      ${region.suppliers}
    </div>
  `;

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
  }, []);

  return (
    <div
      ref={mapContainer}
      className="h-[700px] w-full overflow-hidden rounded-2xl border border-slate-200"
    />
  );
}