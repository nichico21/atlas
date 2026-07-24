"use client";

import { useOpportunityForm } from "@/context/OpportunityFormContext";

type FormSection = {
  id: string;
  number: number;
  title: string;
};

type FormProgressSidebarProps = {
  sections: FormSection[];
  color?: "violet" | "blue";
};

export default function FormProgressSidebar({
  sections,
  color = "violet",
}: FormProgressSidebarProps) {
  const { activeSection, setActiveSection } = useOpportunityForm();

  const currentIndex = sections.findIndex(
    (section) => section.id === activeSection
  );

  const progress =
    ((currentIndex + 1) / sections.length) * 100;

  const activeBackground =
    color === "blue"
      ? "bg-blue-50"
      : "bg-violet-50";

  const activeCircle =
    color === "blue"
      ? "bg-blue-600 text-white"
      : "bg-violet-600 text-white";

  const activeText =
    color === "blue"
      ? "text-blue-700"
      : "text-violet-700";

  const progressBar =
    color === "blue"
      ? "bg-blue-600"
      : "bg-violet-600";

  const handleClick = (id: string) => {
  console.log("Click :", id);

  const element = document.getElementById(id);

  console.log(element);

  if (!element) {
    console.log("Section introuvable !");
    return;
  }

  setActiveSection(id);

  const navbarHeight = 72;
  const margin = 23 ;

  const y =
    element.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight -
    margin;

  console.log(y);

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h3 className="mb-6 text-lg font-semibold text-slate-900">
        Progression
      </h3>

      <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full transition-all duration-500 ${progressBar}`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-2">
        {sections.map((section) => {
          const isActive = section.id === activeSection;

          return (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200 ${
                isActive
                  ? activeBackground
                  : "hover:bg-slate-50"
              }`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  isActive
                    ? activeCircle
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {section.number}
              </div>

              <span
                className={`text-sm font-medium ${
                  isActive
                    ? activeText
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