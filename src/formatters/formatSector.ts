const SECTOR_LABELS: Record<string, string> = {
  nuclear: "Nucléaire",
  rail: "Ferroviaire",
  renewables: "Énergies renouvelables",
  power_grids: "Réseaux électriques",
  water: "Eau",
  health: "Santé",
  digital: "Numérique",
  ports: "Ports",
  airports: "Aéroports",
};

export function formatSector(sector: string): string {
  return SECTOR_LABELS[sector] ?? sector;
}