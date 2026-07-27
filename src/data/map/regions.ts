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

{
  id: "occ",
  name: "Occitanie",

  logo: "/regions/logos/occ.jpg",

  latitude: 43.6047,
  longitude: 1.4442,

  companyCount: 58,
  exportingCompanyRate: 81,
  averageExportRate: 36,
  countriesCovered: 44,

  rank: 4,

  description:
    "Portée par l'aéronautique, le spatial et les sciences du vivant, l'Occitanie figure parmi les régions françaises les plus innovantes à l'international.",

  coverImage: "/regions/occitanie.jpg",

  featuredCompanies: [
    {
      id: "airbus",
      name: "Airbus",
      logo: "/logos/airbus.png",
      sector: "Aéronautique",
    },
    {
      id: "pierrefabre",
      name: "Pierre Fabre",
      logo: "/logos/pierre-fabre.png",
      sector: "Santé",
    },
    {
      id: "liebherr",
      name: "Liebherr Aerospace",
      logo: "/logos/liebherr.png",
      sector: "Aéronautique",
    },
  ],

  sectors: [
    {
      id: "aerospace",
      name: "Aéronautique",
      companyCount: 18,
      percentage: 31,
    },
    {
      id: "health",
      name: "Santé",
      companyCount: 13,
      percentage: 22,
    },
    {
      id: "transport",
      name: "Mobilités",
      companyCount: 10,
      percentage: 17,
    },
    {
      id: "digital",
      name: "Numérique",
      companyCount: 9,
      percentage: 16,
    },
    {
      id: "agri",
      name: "Agroalimentaire",
      companyCount: 8,
      percentage: 14,
    },
  ],
},

{
  id: "ges",
  name: "Grand Est",

  logo: "/regions/logos/ges.jpg",

  latitude: 48.5734,
  longitude: 7.7521,

  companyCount: 54,
  exportingCompanyRate: 86,
  averageExportRate: 41,
  countriesCovered: 52,

  rank: 5,

  description:
    "Carrefour industriel européen, le Grand Est s'appuie sur une forte tradition manufacturière et une ouverture historique vers les marchés voisins.",

  coverImage: "/regions/grand-est.jpg",

  featuredCompanies: [
    {
      id: "bugatti",
      name: "Bugatti",
      logo: "/logos/bugatti.png",
      sector: "Automobile",
    },
    {
      id: "socomec",
      name: "Socomec",
      logo: "/logos/socomec.png",
      sector: "Énergie",
    },
    {
      id: "lohr",
      name: "Lohr",
      logo: "/logos/lohr.png",
      sector: "Transport",
    },
  ],

  sectors: [
    {
      id: "industry",
      name: "Industrie",
      companyCount: 16,
      percentage: 30,
    },
    {
      id: "automotive",
      name: "Automobile",
      companyCount: 12,
      percentage: 22,
    },
    {
      id: "energy",
      name: "Énergie",
      companyCount: 10,
      percentage: 19,
    },
    {
      id: "chemistry",
      name: "Chimie",
      companyCount: 9,
      percentage: 17,
    },
    {
      id: "food",
      name: "Agroalimentaire",
      companyCount: 7,
      percentage: 12,
    },
  ],
},

{
  id: "naq",
  name: "Nouvelle-Aquitaine",

  logo: "/regions/logos/naq.jpg",

  latitude: 44.8378,
  longitude: -0.5792,

  companyCount: 52,
  exportingCompanyRate: 78,
  averageExportRate: 34,
  countriesCovered: 41,

  rank: 6,

  description:
    "Première région agricole de France et territoire d'excellence dans l'aéronautique, la Nouvelle-Aquitaine bénéficie d'un tissu exportateur particulièrement diversifié.",

  coverImage: "/regions/nouvelle-aquitaine.jpg",

  featuredCompanies: [
    {
      id: "dassault",
      name: "Dassault Aviation",
      logo: "/logos/dassault.png",
      sector: "Aéronautique",
    },
    {
      id: "lectra",
      name: "Lectra",
      logo: "/logos/lectra.png",
      sector: "Industrie",
    },
    {
      id: "ceva",
      name: "Ceva Santé Animale",
      logo: "/logos/ceva.png",
      sector: "Santé",
    },
  ],

  sectors: [
    {
      id: "aerospace",
      name: "Aéronautique",
      companyCount: 15,
      percentage: 29,
    },
    {
      id: "wine",
      name: "Vins & Spiritueux",
      companyCount: 11,
      percentage: 21,
    },
    {
      id: "health",
      name: "Santé",
      companyCount: 10,
      percentage: 19,
    },
    {
      id: "industry",
      name: "Industrie",
      companyCount: 9,
      percentage: 17,
    },
    {
      id: "wood",
      name: "Bois",
      companyCount: 7,
      percentage: 14,
    },
  ],
},

{
  id: "bre",
  name: "Bretagne",

  logo: "/regions/logos/bre.jpg",

  latitude: 48.1173,
  longitude: -1.6778,

  companyCount: 45,
  exportingCompanyRate: 80,
  averageExportRate: 35,
  countriesCovered: 37,

  rank: 7,

  description:
    "Terre d'innovation maritime et agroalimentaire, la Bretagne s'appuie sur un écosystème dynamique mêlant industrie, numérique et technologies de défense.",

  coverImage: "/regions/bretagne.jpg",

  featuredCompanies: [
    {
      id: "navalgroup",
      name: "Naval Group",
      logo: "/logos/naval-group.png",
      sector: "Défense",
    },
    {
      id: "savéol",
      name: "Savéol",
      logo: "/logos/saveol.png",
      sector: "Agroalimentaire",
    },
    {
      id: "secureic",
      name: "Secure-IC",
      logo: "/logos/secure-ic.png",
      sector: "Numérique",
    },
  ],

  sectors: [
    {
      id: "maritime",
      name: "Maritime",
      companyCount: 13,
      percentage: 29,
    },
    {
      id: "food",
      name: "Agroalimentaire",
      companyCount: 11,
      percentage: 24,
    },
    {
      id: "digital",
      name: "Numérique",
      companyCount: 8,
      percentage: 18,
    },
    {
      id: "defense",
      name: "Défense",
      companyCount: 7,
      percentage: 16,
    },
    {
      id: "energy",
      name: "Énergies marines",
      companyCount: 6,
      percentage: 13,
    },
  ],
},

{
  id: "pdl",
  name: "Pays de la Loire",

  logo: "/regions/logos/pdl.jpg",

  latitude: 47.2184,
  longitude: -1.5536,

  companyCount: 49,
  exportingCompanyRate: 82,
  averageExportRate: 37,
  countriesCovered: 39,

  rank: 8,

  description:
    "Reconnue pour ses filières navale, industrielle et agricole, la région bénéficie d'un tissu dense d'entreprises exportatrices à forte croissance.",

  coverImage: "/regions/pays-de-la-loire.jpg",

  featuredCompanies: [
    {
      id: "manitou",
      name: "Manitou",
      logo: "/logos/manitou.png",
      sector: "Industrie",
    },
    {
      id: "beneteau",
      name: "Beneteau",
      logo: "/logos/beneteau.png",
      sector: "Naval",
    },
    {
      id: "atlantique",
      name: "Chantiers de l'Atlantique",
      logo: "/logos/chantiers-atlantique.png",
      sector: "Naval",
    },
  ],

  sectors: [
    {
      id: "naval",
      name: "Naval",
      companyCount: 14,
      percentage: 29,
    },
    {
      id: "industry",
      name: "Industrie",
      companyCount: 12,
      percentage: 25,
    },
    {
      id: "food",
      name: "Agroalimentaire",
      companyCount: 9,
      percentage: 18,
    },
    {
      id: "transport",
      name: "Mobilités",
      companyCount: 8,
      percentage: 16,
    },
    {
      id: "energy",
      name: "Énergies",
      companyCount: 6,
      percentage: 12,
    },
  ],
},

{
  id: "nor",
  name: "Normandie",

  logo: "/regions/logos/nor.jpg",

  latitude: 49.1829,
  longitude: -0.3707,

  companyCount: 36,
  exportingCompanyRate: 77,
  averageExportRate: 31,
  countriesCovered: 34,

  rank: 9,

  description:
    "Ouverte sur la Manche et dotée d'infrastructures portuaires majeures, la Normandie s'illustre dans les secteurs de l'énergie, du maritime et de l'agroalimentaire.",

  coverImage: "/regions/normandie.jpg",

  featuredCompanies: [
    {
      id: "orano",
      name: "Orano",
      logo: "/logos/orano.png",
      sector: "Énergie",
    },
    {
      id: "ferrero",
      name: "Ferrero France",
      logo: "/logos/ferrero.png",
      sector: "Agroalimentaire",
    },
    {
      id: "valorex",
      name: "Valorex",
      logo: "/logos/valorex.png",
      sector: "Nutrition animale",
    },
  ],

  sectors: [
    {
      id: "energy",
      name: "Énergie",
      companyCount: 11,
      percentage: 31,
    },
    {
      id: "maritime",
      name: "Maritime",
      companyCount: 8,
      percentage: 22,
    },
    {
      id: "food",
      name: "Agroalimentaire",
      companyCount: 7,
      percentage: 19,
    },
    {
      id: "industry",
      name: "Industrie",
      companyCount: 6,
      percentage: 17,
    },
    {
      id: "health",
      name: "Santé",
      companyCount: 4,
      percentage: 11,
    },
  ],
},

{
  id: "hdf",
  name: "Hauts-de-France",

  logo: "/regions/logos/hdf.jpg",

  latitude: 50.6292,
  longitude: 3.0573,

  companyCount: 31,
  exportingCompanyRate: 83,
  averageExportRate: 37,
  countriesCovered: 36,

  rank: 10,

  description:
    "Au cœur des échanges européens, les Hauts-de-France disposent d'un tissu industriel dense et d'une forte tradition exportatrice.",

  coverImage: "/regions/hauts-de-france.jpg",

  featuredCompanies: [
    {
      id: "roquette",
      name: "Roquette",
      logo: "/logos/roquette.png",
      sector: "Agroalimentaire",
    },
    {
      id: "ovh",
      name: "OVHcloud",
      logo: "/logos/ovhcloud.png",
      sector: "Numérique",
    },
    {
      id: "arc",
      name: "Arc International",
      logo: "/logos/arc.png",
      sector: "Industrie",
    },
  ],

  sectors: [
    {
      id: "industry",
      name: "Industrie",
      companyCount: 10,
      percentage: 32,
    },
    {
      id: "food",
      name: "Agroalimentaire",
      companyCount: 7,
      percentage: 23,
    },
    {
      id: "digital",
      name: "Numérique",
      companyCount: 5,
      percentage: 16,
    },
    {
      id: "transport",
      name: "Transport",
      companyCount: 5,
      percentage: 16,
    },
    {
      id: "energy",
      name: "Énergie",
      companyCount: 4,
      percentage: 13,
    },
  ],
},

{
  id: "cvl",
  name: "Centre-Val de Loire",

  logo: "/regions/logos/cvl.jpg",

  latitude: 47.9029,
  longitude: 1.9093,

  companyCount: 33,
  exportingCompanyRate: 79,
  averageExportRate: 34,
  countriesCovered: 31,

  rank: 11,

  description:
    "Le Centre-Val de Loire s'appuie sur des filières d'excellence dans la défense, la pharmacie et la logistique, au cœur du territoire national.",

  coverImage: "/regions/centre-val-de-loire.jpg",

  featuredCompanies: [
    {
      id: "mbda",
      name: "MBDA",
      logo: "/logos/mbda.png",
      sector: "Défense",
    },
    {
      id: "hutchinson",
      name: "Hutchinson",
      logo: "/logos/hutchinson.png",
      sector: "Industrie",
    },
    {
      id: "stef",
      name: "STEF",
      logo: "/logos/stef.png",
      sector: "Logistique",
    },
  ],

  sectors: [
    {
      id: "defense",
      name: "Défense",
      companyCount: 9,
      percentage: 28,
    },
    {
      id: "industry",
      name: "Industrie",
      companyCount: 8,
      percentage: 24,
    },
    {
      id: "health",
      name: "Santé",
      companyCount: 6,
      percentage: 18,
    },
    {
      id: "transport",
      name: "Logistique",
      companyCount: 6,
      percentage: 18,
    },
    {
      id: "food",
      name: "Agroalimentaire",
      companyCount: 4,
      percentage: 12,
    },
  ],
},

{
  id: "bfc",
  name: "Bourgogne-Franche-Comté",

  logo: "/regions/logos/bfc.jpg",

  latitude: 47.322,
  longitude: 5.0415,

  companyCount: 39,
  exportingCompanyRate: 84,
  averageExportRate: 39,
  countriesCovered: 38,

  rank: 12,

  description:
    "Forte d'un savoir-faire industriel reconnu, la Bourgogne-Franche-Comté se distingue dans les secteurs du ferroviaire, de la santé et des biens d'équipement.",

  coverImage: "/regions/bourgogne-franche-comte.jpg",

  featuredCompanies: [
    {
      id: "urgo",
      name: "Urgo",
      logo: "/logos/urgo.png",
      sector: "Santé",
    },
    {
      id: "seb",
      name: "Groupe SEB",
      logo: "/logos/seb.png",
      sector: "Biens de consommation",
    },
    {
      id: "alstombelfort",
      name: "Alstom",
      logo: "/logos/alstom.png",
      sector: "Transport",
    },
  ],

  sectors: [
    {
      id: "transport",
      name: "Transport",
      companyCount: 11,
      percentage: 28,
    },
    {
      id: "industry",
      name: "Industrie",
      companyCount: 10,
      percentage: 26,
    },
    {
      id: "health",
      name: "Santé",
      companyCount: 7,
      percentage: 18,
    },
    {
      id: "consumer",
      name: "Biens de consommation",
      companyCount: 6,
      percentage: 15,
    },
    {
      id: "energy",
      name: "Énergie",
      companyCount: 5,
      percentage: 13,
    },
  ],
},

{
  id: "cor",
  name: "Corse",

  logo: "/regions/logos/cor.jpg",

  latitude: 41.9192,
  longitude: 8.7386,

  companyCount: 12,
  exportingCompanyRate: 68,
  averageExportRate: 18,
  countriesCovered: 14,

  rank: 13,

  description:
    "Portée par des entreprises à forte identité territoriale, la Corse développe progressivement sa présence à l'international dans les filières agroalimentaires, maritimes et touristiques.",

  coverImage: "/regions/corse.jpg",

  featuredCompanies: [
    {
      id: "pietra",
      name: "Brasserie Pietra",
      logo: "/logos/pietra.png",
      sector: "Agroalimentaire",
    },
    {
      id: "corsicaferries",
      name: "Corsica Ferries",
      logo: "/logos/corsica-ferries.png",
      sector: "Maritime",
    },
    {
      id: "ossi",
      name: "Ossi",
      logo: "/logos/ossi.png",
      sector: "Cosmétique",
    },
  ],

  sectors: [
    {
      id: "food",
      name: "Agroalimentaire",
      companyCount: 4,
      percentage: 33,
    },
    {
      id: "maritime",
      name: "Maritime",
      companyCount: 3,
      percentage: 25,
    },
    {
      id: "tourism",
      name: "Tourisme",
      companyCount: 2,
      percentage: 17,
    },
    {
      id: "cosmetics",
      name: "Cosmétique",
      companyCount: 2,
      percentage: 17,
    },
    {
      id: "energy",
      name: "Énergies",
      companyCount: 1,
      percentage: 8,
    },
  ],
},
]