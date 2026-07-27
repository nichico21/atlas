import type { Region } from "@/types/region";

export const regions: Region[] = [
  {
    id: "idf",
    name: "Île-de-France",

logo: "/regions/logos/idf.jpg",

    latitude: 48.8566,
    longitude: 2.3522,

    companyCount: 126,
    exportingCompanyRate: 84,
    averageExportRate: 39,
    countriesCovered: 47,

    rank: 1,

    description:
      "Première région économique française, l'Île-de-France concentre un écosystème industriel, technologique et exportateur particulièrement dense.",

    coverImage: "/regions/ile-de-france.jpg",

    featuredCompanies: [
      {
        id: "schneider",
        name: "Schneider Electric",
        logo: "/logos/schneider-electric.png",
        sector: "Énergie",
      },
      {
        id: "thales",
        name: "Thales",
        logo: "/logos/thales.png",
        sector: "Défense",
      },
      {
        id: "alstom",
        name: "Alstom",
        logo: "/logos/alstom.png",
        sector: "Transport",
      },
    ],

    sectors: [
      {
        id: "energy",
        name: "Énergie",
        companyCount: 35,
        percentage: 28,
      },
      {
        id: "transport",
        name: "Transport",
        companyCount: 27,
        percentage: 22,
      },
      {
        id: "defense",
        name: "Défense",
        companyCount: 24,
        percentage: 19,
      },
      {
        id: "digital",
        name: "Numérique",
        companyCount: 22,
        percentage: 17,
      },
      {
        id: "health",
        name: "Santé",
        companyCount: 18,
        percentage: 14,
      },
    ],
  },

  {
    id: "ara",
    name: "Auvergne-Rhône-Alpes",

logo: "/regions/logos/aura.png",

    latitude: 45.764,
    longitude: 4.8357,

    companyCount: 92,
    exportingCompanyRate: 78,
    averageExportRate: 34,
    countriesCovered: 35,

    rank: 2,

    description:
      "Deuxième région exportatrice française, portée par l'industrie, l'énergie, la santé et les technologies de pointe.",

    coverImage: "/regions/auvergne-rhone-alpes.jpg",

    featuredCompanies: [
      {
        id: "michelin",
        name: "Michelin",
        logo: "/logos/michelin.png",
        sector: "Mobilité",
      },
      {
        id: "biomerieux",
        name: "bioMérieux",
        logo: "/logos/biomerieux.png",
        sector: "Santé",
      },
      {
        id: "vicat",
        name: "Vicat",
        logo: "/logos/vicat.png",
        sector: "Construction",
      },
    ],

    sectors: [
      {
        id: "industry",
        name: "Industrie",
        companyCount: 26,
        percentage: 28,
      },
      {
        id: "health",
        name: "Santé",
        companyCount: 20,
        percentage: 21,
      },
      {
        id: "energy",
        name: "Énergie",
        companyCount: 18,
        percentage: 19,
      },
      {
        id: "mobility",
        name: "Mobilité",
        companyCount: 16,
        percentage: 17,
      },
      {
        id: "construction",
        name: "Construction",
        companyCount: 14,
        percentage: 15,
      },
    ],
  },

  {
    id: "paca",
    name: "Provence-Alpes-Côte d'Azur",

logo: "/regions/logos/paca.png",

    latitude: 43.2965,
    longitude: 5.3698,

    companyCount: 61,
    exportingCompanyRate: 62,
    averageExportRate: 29,
    countriesCovered: 37,

    rank: 3,

    description:
      "Un territoire fortement tourné vers la mer, l'aéronautique, la défense et les énergies décarbonées.",

    coverImage: "/regions/paca.jpg",

    featuredCompanies: [
      {
        id: "naval-group",
        name: "Naval Group",
        logo: "/logos/naval-group.png",
        sector: "Défense",
      },
      {
        id: "airbus-heli",
        name: "Airbus Helicopters",
        logo: "/logos/airbus.png",
        sector: "Aéronautique",
      },
      {
        id: "cma-cgm",
        name: "CMA CGM",
        logo: "/logos/cma-cgm.png",
        sector: "Transport",
      },
    ],

    sectors: [
      {
        id: "defense",
        name: "Défense",
        companyCount: 18,
        percentage: 30,
      },
      {
        id: "transport",
        name: "Transport",
        companyCount: 14,
        percentage: 23,
      },
      {
        id: "aerospace",
        name: "Aéronautique",
        companyCount: 11,
        percentage: 18,
      },
      {
        id: "energy",
        name: "Énergie",
        companyCount: 10,
        percentage: 16,
      },
      {
        id: "maritime",
        name: "Maritime",
        companyCount: 8,
        percentage: 13,
      },
    ],
  },
];