import { Region } from "@/types/region";

export const regions: Region[] = [
  {
    id: "idf",

    name: "Île-de-France",

    latitude: 48.8566,
    longitude: 2.3522,

    companyCount: 126,

    newCompanies: 18,

    countriesCovered: 72,

    sectorCount: 18,

    description:
      "Première région française en nombre d'entreprises exportatrices. Forte concentration dans les secteurs de l'énergie, du numérique, des transports et de la défense.",

    featuredCompanies: [
      {
        id: "schneider",
        name: "Schneider Electric",
        logo: "/logos/schneider-electric.png",
        sector: "Énergie",
      },
      {
        id: "air-liquide",
        name: "Air Liquide",
        logo: "/logos/air-liquide.png",
        sector: "Industrie",
      },
      {
        id: "thales",
        name: "Thales",
        logo: "/logos/thales.png",
        sector: "Défense",
      },
      {
        id: "vinci",
        name: "VINCI",
        logo: "/logos/vinci.png",
        sector: "Construction",
      },
    ],

    sectors: [
      {
        id: "energy",
        name: "Énergie",
        percentage: 28,
        companyCount: 35,
      },
      {
        id: "industry",
        name: "Industrie",
        percentage: 24,
        companyCount: 30,
      },
      {
        id: "transport",
        name: "Transport",
        percentage: 18,
        companyCount: 22,
      },
      {
        id: "digital",
        name: "Technologies",
        percentage: 15,
        companyCount: 19,
      },
      {
        id: "environment",
        name: "Environnement",
        percentage: 9,
        companyCount: 11,
      },
      {
        id: "health",
        name: "Santé",
        percentage: 6,
        companyCount: 9,
      },
    ],
  },

  {
    id: "ara",

    name: "Auvergne-Rhône-Alpes",

    latitude: 45.764,
    longitude: 4.8357,

    companyCount: 94,

    newCompanies: 8,

    countriesCovered: 47,

    sectorCount: 12,

    description:
      "Deuxième région française par le nombre d'entreprises industrielles référencées.",

    featuredCompanies: [],

    sectors: [],
  },

  // etc...
];