"use client";

import { useEffect } from "react";

import { opportunityFormSections } from "@/data/opportunityFormSections";
import { useOpportunityForm } from "@/context/OpportunityFormContext";

export default function SectionObserver() {
  const {
    setActiveSection,
    setCompletedSections,
  } = useOpportunityForm();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    opportunityFormSections.forEach((section, index) => {
      const element = document.getElementById(section.id);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;

          setActiveSection(section.id);

          const completed = opportunityFormSections
            .slice(0, index)
            .map((s) => s.id);

          setCompletedSections(completed);
        },
        {
          rootMargin: "-120px 0px -55% 0px",
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [setActiveSection, setCompletedSections]);

  return null;
}