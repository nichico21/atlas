export interface Company {

  id: string;

  name: string;

  commercialName?: string;

  siren?: string;

  nafCode?: string;

  foundingYear?: number;

  website?: string;

  linkedin?: string;

  shortDescription: string;

  detailedDescription?: string;

  headcountRange?: string;

  revenueRange?: string;

  annualRevenue?: number;

  primarySectors: string[];
  
  subSectors: string[];

  offerType: string[];

  keyCapabilities: string[];

  supplyChainPosition: string[];

  internationalExperience?: boolean;

  consortiumCapacity?: boolean;

  exportCountries?: string[];

  geographicZones?: string[];

  exportRevenueShare?: number;

  workingLanguages?: string[];

  certifications?: string[];

  labels?: string[];

  valueProposition?: string;

  contactName?: string;

  contactEmail?: string;

  contactPhone?: string;

  headquartersCountry?: string;

  headquartersAddress?: string;

  sourceUrl: string;

  sourceId: string;

  sourceIds?: string[];

  completionStatus: string;

  lastUpdated: string;

}