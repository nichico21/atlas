"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

type OpportunityFormContextType = {
  activeSection: string;
  completedSections: string[];

  setActiveSection: (section: string) => void;
  setCompletedSections: (sections: string[]) => void;
};

const OpportunityFormContext =
  createContext<OpportunityFormContextType | null>(null);

type ProviderProps = {
  children: ReactNode;
};

export function OpportunityFormProvider({
  children,
}: ProviderProps) {
  const [activeSection, setActiveSection] =
    useState("general");

  const [completedSections, setCompletedSections] =
    useState<string[]>([]);

  const value = useMemo(
    () => ({
      activeSection,
      completedSections,
      setActiveSection,
      setCompletedSections,
    }),
    [activeSection, completedSections]
  );

  return (
    <OpportunityFormContext.Provider value={value}>
      {children}
    </OpportunityFormContext.Provider>
  );
}

export function useOpportunityForm() {
  const context = useContext(OpportunityFormContext);

  if (!context) {
    throw new Error(
      "useOpportunityForm must be used inside OpportunityFormProvider."
    );
  }

  return context;
}