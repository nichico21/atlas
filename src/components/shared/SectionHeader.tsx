import { ReactNode } from "react";

type SectionHeaderProps = {
  number: number;
  title: string;
  icon?: ReactNode;
  color?: "violet" | "blue";
};

export default function SectionHeader({
  number,
  title,
  icon,
  color = "violet",
}: SectionHeaderProps) {
  const circleClass =
    color === "blue"
      ? "bg-blue-600"
      : "bg-violet-600";

  const iconClass =
    color === "blue"
      ? "text-blue-600"
      : "text-violet-600";

  return (
    <div className="mb-6 flex items-center gap-4">

      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-white ${circleClass}`}
      >
        {number}
      </div>

      {icon && (
        <div className={`text-lg ${iconClass}`}>
          {icon}
        </div>
      )}

      <h2 className="text-2xl font-bold text-slate-900">
        {title}
      </h2>

    </div>
  );
}