"use client";

import { useEffect } from "react";

import { useOpportunityForm } from "@/context/OpportunityFormContext";

type FormSection = {
  id: string;
  number: number;
  title: string;
};

type FormSectionObserverProps = {
  sections: FormSection[];
};

export default function FormSectionObserver({
  sections,
}: FormSectionObserverProps) {
  const { setActiveSection } = useOpportunityForm();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;

          setActiveSection(section.id);
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
  }, [sections, setActiveSection]);

  return null;
}