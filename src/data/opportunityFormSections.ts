export type OpportunityFormSection = {
  id: string;
  number: number;
  title: string;
};

export const opportunityFormSections: OpportunityFormSection[] = [
  {
    id: "general",
    number: 1,
    title: "Informations générales",
  },
  {
    id: "description",
    number: 2,
    title: "Description du projet",
  },
  {
    id: "needs",
    number: 3,
    title: "Secteurs et besoins",
  },
  {
    id: "commercial",
    number: 4,
    title: "Informations commerciales",
  },
  {
    id: "markets",
    number: 5,
    title: "Marché et localisation",
  },
  {
    id: "criteria",
    number: 6,
    title: "Exigences et critères",
  },
  {
    id: "financing",
    number: 7,
    title: "Financement",
  },
  {
    id: "documents",
    number: 8,
    title: "Documents",
  },
];