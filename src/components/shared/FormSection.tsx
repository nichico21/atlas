import { ReactNode } from "react";

import SectionHeader from "@/components/shared/SectionHeader";

type FormSectionProps = {
  id: string;
  number: number;
  title: string;
  icon?: ReactNode;
  color?: "violet" | "blue";
  children: ReactNode;
};

export default function FormSection({
  id,
  number,
  title,
  icon,
  color = "violet",
  children,
}: FormSectionProps) {
  return (
    <section
      id={id}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <SectionHeader
        number={number}
        title={title}
        icon={icon}
        color={color}
      />

      {children}
    </section>
  );
}