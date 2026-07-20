export type Opportunity = {
  id: number;

  title: string;

  description: string;

  image: string;

  country: string;

  continent: string;

  sector: string;

  amount: number;

  currency: "EUR" | "USD";

  stage: string;

  deadline: string;

  lender: string;

  buyer: string;

  frenchPotential: number;

  strategic: boolean;

  publishedAt: string;

  tags: string[];
};