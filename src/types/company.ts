export type Company = {
  id: string;

  name: string;

  logo: string;

  headquarters: string;

  website: string;

  description: string;

  sectors: string[];

  capabilities: string[];

  countries: string[];

  geographicZones?: string[];

  references: string[];

  certifications: string[];

  employees: number;

  turnover: number;

  exportExperience: "Faible" | "Moyenne" | "Élevée";

  exportRevenueSharePercent?: number;

supplyChainPosition?: string[];

  contact: {
    name: string;
    email: string;
    phone: string;
  };

  frenchPotentialScore: number;

  headcountRange?: string;

  strategicPartner: boolean;

  lastUpdated: string;

};