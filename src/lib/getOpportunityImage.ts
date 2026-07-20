const imageQueries: Record<string, string> = {
  "Extension de Sizewell C":
    "Sizewell C nuclear power plant",

  "Métro de Belgrade - Phase 2":
    "Belgrade metro",

  "LGV Casablanca – Marrakech":
    "Morocco high speed train",

  "Usine de dessalement de Jubail":
    "desalination plant",

  "Modernisation du réseau électrique de Jakarta":
    "electric substation",

  "Construction d'un hôpital universitaire à Lagos":
    "modern hospital",

  "Centre de données à Hô Chi Minh-Ville":
    "data center",

  "Extension du port de Callao":
    "container port",

  "Extension de l'aéroport Pearson":
    "international airport",

  "Parc éolien offshore en mer Baltique":
    "offshore wind farm",
};

export function getOpportunityImage(title: string) {
  const query = imageQueries[title] ?? "industrial infrastructure";

  return `https://images.unsplash.com/featured/?${encodeURIComponent(query)}`;
}