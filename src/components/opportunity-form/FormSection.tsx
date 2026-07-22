import { ReactNode } from "react";

type FormSectionProps = {
  number: number;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
};

export default function FormSection({
  number,
  title,
  icon,
  children,
}: FormSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center gap-4">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
          {number}
        </div>

        {icon}

        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>

      </div>

      {children}

    </section>
  );
}