export type SupplierMatch = {
  id: string;
  name: string;
  initials: string;
  companySize: string;
  score: number;
  strengths: string[];
};

export const supplierMatches: SupplierMatch[] = [
  {
    id: "schneider-electric",
    name: "Schneider Electric",
    initials: "SE",
    companySize: "Grande entreprise",
    score: 96,
    strengths: [
      "SCADA & EMS déployés chez 40+ TSO",
      "Hub régional à Riyad (2 000+ collaborateurs)",
      "Accord-cadre SEC depuis 2014",
    ],
  },

  {
    id: "alstom-grid",
    name: "Alstom Grid",
    initials: "AG",
    companySize: "Grande entreprise",
    score: 91,
    strengths: [
      "Postes HT jusqu'à 800 kV",
      "12 postes livrés dans le GCC",
      "Conforme Saudi Grid Code & IEC 61850",
    ],
  },

  {
    id: "abb-france",
    name: "ABB France",
    initials: "AF",
    companySize: "Grande entreprise",
    score: 88,
    strengths: [
      "Usine locale à Dammam",
      "150+ références de sous-stations au Moyen-Orient",
      "Fournisseur agréé IFC & EBRD",
    ],
  },

  {
    id: "siemens-energy",
    name: "Siemens Energy",
    initials: "SE",
    companySize: "Grande entreprise",
    score: 84,
    strengths: [
      "Technologies HVDC & FACTS",
      "Projets NEOM & Red Sea en cours",
      "Financements ECA approuvés",
    ],
  },

  {
    id: "nexans",
    name: "Nexans",
    initials: "N",
    companySize: "Grande entreprise",
    score: 79,
    strengths: [
      "Câbles HT/THT jusqu'à 525 kV",
      "Usine de Jubail via JV locale",
      "Fournit les backbones de SEC",
    ],
  },

  {
    id: "atos",
    name: "Atos",
    initials: "A",
    companySize: "Grande entreprise",
    score: 82,
    strengths: [
      "Cybersécurité OT/SCADA (IEC 62443)",
      "SOC opérationnels à Riyad & Dubaï",
      "Certifié Saudi NCA ECC",
    ],
  },
];