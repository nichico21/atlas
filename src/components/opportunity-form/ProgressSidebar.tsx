"use client";

import { opportunityFormSections } from "@/data/opportunityFormSections";
import { useOpportunityForm } from "@/hooks/useOpportunityForm";

type ProgressSidebarProps = {
  currentSection?: string;
  completedSections?: string[];
};

export default function ProgressSidebar({
  currentSection = "general",
  completedSections = [],
}: ProgressSidebarProps) {
  const { scrollToSection } = useOpportunityForm();
  const progress = Math.round(
    (completedSections.length / opportunityFormSections.length) * 100
  );

  return (
    <aside className="sticky top-20 self-start">

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

        <h3 className="text-xl font-bold">
          Progression
        </h3>

        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-violet-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />

        </div>

        <p className="mt-1 text-sm text-slate-500">
          {progress}% complété
        </p>

        <div className="mt-3 space-y-1">

          {opportunityFormSections.map((section) => {

            const completed = completedSections.includes(section.id);

            const active = section.id === currentSection;

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left transition-all

                ${
                  completed
                    ? "bg-green-50"
                    : active
                    ? "bg-violet-50"
                    : "hover:bg-slate-50"
                }`}
              >

                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold

                  ${
                    completed
                      ? "bg-green-600 text-white"
                      : active
                      ? "bg-violet-600 text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {completed ? "✓" : section.number}
                </div>

                <span className="font-medium">
                  {section.title}
                </span>

              </button>
            );
          })}

        </div>

      </div>

    </aside>
  );
}