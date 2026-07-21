import type { SupplierMatch } from "@/data/supplierMatches";
import CompatibilityScore from "./CompatibilityScore";

type SupplierMatchCardProps = {
  match: SupplierMatch;
};

export default function SupplierMatchCard({
  match,
}: SupplierMatchCardProps) {
  const {
    name,
    initials,
    companySize,
    score,
    strengths,
  } = match;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            {name}
          </h3>

          <span className="mt-2 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            {companySize}
          </span>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-500">
          {initials}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Compatibility score
          </p>
        </div>

        <CompatibilityScore score={score} />
      </div>

      <hr className="my-4 border-slate-200" />

      <ul className="space-y-2">
        {strengths.map((strength) => (
          <li
            key={strength}
            className="text-sm text-slate-600"
          >
            • {strength}
          </li>
        ))}
      </ul>
    </div>
  );
}