export type SupplierFormSection = {
  id: string;
  number: number;
  title: string;
};

export const supplierFormSections: SupplierFormSection[] = [
  {
    id: "general",
    number: 1,
    title: "Informations générales",
  },
  {
    id: "activities",
    number: 2,
    title: "Activités et capacités",
  },
  {
    id: "references",
    number: 3,
    title: "Références et expérience",
  },
  {
    id: "markets",
    number: 4,
    title: "Marchés et présence internationale",
  },
  {
    id: "certifications",
    number: 5,
    title: "Certifications et labels",
  },
  {
    id: "commercial",
    number: 6,
    title: "Informations commerciales",
  },
  {
    id: "documents",
    number: 7,
    title: "Médias et documents",
  },
  {
    id: "administrative",
    number: 8,
    title: "Informations administratives",
  },
];