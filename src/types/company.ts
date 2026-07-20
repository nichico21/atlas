export type Company = {
  id: number;

  name: string;

  logo: string;

  headquarters: string;

  website: string;

  description: string;

  sectors: string[];

  capabilities: string[];

  countries: string[];

  references: string[];

  certifications: string[];

  employees: number;

  turnover: number;

  exportExperience: "Faible" | "Moyenne" | "Élevée";

  contact: {
    name: string;
    email: string;
    phone: string;
  };

  frenchPotentialScore: number;

  strategicPartner: boolean;

  lastUpdated: string;
};