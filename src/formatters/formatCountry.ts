const COUNTRY_LABELS: Record<string, string> = {
  "Royaume-Uni": "🇬🇧 Royaume-Uni",
  Serbie: "🇷🇸 Serbie",
  Maroc: "🇲🇦 Maroc",
  "Arabie saoudite": "🇸🇦 Arabie saoudite",
  Indonésie: "🇮🇩 Indonésie",
  Nigeria: "🇳🇬 Nigeria",
  Vietnam: "🇻🇳 Vietnam",
  Pérou: "🇵🇪 Pérou",
  Canada: "🇨🇦 Canada",
};

export function formatCountry(country: string): string {
  return COUNTRY_LABELS[country] ?? country;
}