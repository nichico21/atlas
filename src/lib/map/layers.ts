import maplibregl from "maplibre-gl";

export function loadLayers(map: maplibregl.Map) {
  map.addLayer({
  id: "world-fill",
  type: "fill",
  source: "world",

  paint: {
    "fill-color": "#E2E8F0",
    "fill-opacity": 1,
  },
});

map.addLayer({
  id: "world-outline",
  type: "line",
  source: "world",

  paint: {
    "line-color": "#CBD5E1",
    "line-width": 0.8,
  },
});
    map.addLayer({
    id: "regions-fill",
    type: "fill",
    source: "regions",

    paint: {
      "fill-color": "#FFFFFF",
      "fill-opacity": 1,
    },
  });

  map.addLayer({
    id: "regions-outline",
    type: "line",
    source: "regions",

    paint: {
      "line-color": "#C5CED9",
      "line-width": 1.2,
    },
  });
}