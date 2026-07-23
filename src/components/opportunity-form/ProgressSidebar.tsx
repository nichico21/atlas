"use client";

import { opportunityFormSections } from "@/data/opportunityFormSections";
import { useOpportunityForm } from "@/context/OpportunityFormContext";

type ProgressSidebarProps = {
  completedSections?: string[];
};

export default function ProgressSidebar({
  completedSections = [],
}: ProgressSidebarProps) {
  const {
    activeSection,
    setActiveSection,
  } = useOpportunityForm();

  const progress =
    ((completedSections.length + 1) / opportunityFormSections.length) * 100;

  const handleClick = (id: string) => {
    setActiveSection(id);

    const element = document.getElementById(id);

    if (!element) return;

    const navbarHeight = 64;
    const margin = 24;

    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight -
      margin;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <aside className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h3 className="mb-6 text-lg font-semibold text-slate-900">
        Progression
      </h3>

      <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-violet-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-2">

        {opportunityFormSections.map((section) => {

          const isActive = section.id === activeSection;
          const isCompleted = completedSections.includes(section.id);

          return (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200
                ${
                  isActive
                    ? "bg-violet-50"
                    : "hover:bg-slate-50"
                }`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold
                  ${
                    isActive
                      ? "bg-violet-600 text-white"
                      : isCompleted
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
              >
                {section.number}
              </div>

              <span
                className={`text-sm font-medium
                  ${
                    isActive
                      ? "text-violet-700"
                      : "text-slate-700"
                  }`}
              >
                {section.title}
              </span>
            </button>
          );
        })}

      </div>

    </aside>
  );
}