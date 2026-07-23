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

  setActiveSection: (section: string) => void;
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

  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
    }),
    [activeSection]
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