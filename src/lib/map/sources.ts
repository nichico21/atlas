import maplibregl from "maplibre-gl";

export function loadSources(map: maplibregl.Map) {
  map.addSource("regions", {
    type: "geojson",

    data: "/map/france-regions.geojson",
    
  });
  map.addSource("world", {
  type: "geojson",
  data: "/map/world.json",
});
}