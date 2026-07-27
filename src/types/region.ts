export interface FeaturedCompany {
  id: string;
  name: string;
  logo: string;
  sector: string;
}

export interface SectorData {
  id: string;
  name: string;
  icon?: string;
  companyCount: number;
  percentage: number;
}

export interface Region {
  id: string;

  name: string;

 logo: string; 

  latitude: number;
  longitude: number;

  companyCount: number;
 exportingCompanyRate: number;
    averageExportRate: number;
    countriesCovered: number;

  description: string;

  coverImage?: string;
  
  rank?: number;

  featuredCompanies: FeaturedCompany[];

  sectors: SectorData[];
}