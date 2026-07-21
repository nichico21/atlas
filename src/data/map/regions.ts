export type RegionCluster = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  suppliers: number;
};

export const regions: RegionCluster[] = [
  {
    id: "idf",
    name: "Île-de-France",
    latitude: 48.8566,
    longitude: 2.3522,
    suppliers: 126,
  },
  {
    id: "hdf",
    name: "Hauts-de-France",
    latitude: 50.6292,
    longitude: 3.0573,
    suppliers: 42,
  },
  {
    id: "nor",
    name: "Normandie",
    latitude: 49.1829,
    longitude: -0.3707,
    suppliers: 31,
  },
  {
    id: "bre",
    name: "Bretagne",
    latitude: 48.1173,
    longitude: -1.6778,
    suppliers: 48,
  },
  {
    id: "pll",
    name: "Pays de la Loire",
    latitude: 47.2184,
    longitude: -1.5536,
    suppliers: 37,
  },
  {
    id: "cvl",
    name: "Centre-Val de Loire",
    latitude: 47.9029,
    longitude: 1.9093,
    suppliers: 29,
  },
  {
    id: "ges",
    name: "Grand Est",
    latitude: 48.5734,
    longitude: 7.7521,
    suppliers: 53,
  },
  {
    id: "bfc",
    name: "Bourgogne-Franche-Comté",
    latitude: 47.322,
    longitude: 5.0415,
    suppliers: 34,
  },
  {
    id: "naq",
    name: "Nouvelle-Aquitaine",
    latitude: 44.8378,
    longitude: -0.5792,
    suppliers: 64,
  },
  {
    id: "ara",
    name: "Auvergne-Rhône-Alpes",
    latitude: 45.764,
    longitude: 4.8357,
    suppliers: 94,
  },
  {
    id: "occ",
    name: "Occitanie",
    latitude: 43.6047,
    longitude: 1.4442,
    suppliers: 58,
  },
  {
    id: "paca",
    name: "Provence-Alpes-Côte d'Azur",
    latitude: 43.2965,
    longitude: 5.3698,
    suppliers: 61,
  },
  {
    id: "cor",
    name: "Corse",
    latitude: 41.9192,
    longitude: 8.7386,
    suppliers: 12,
  },
];