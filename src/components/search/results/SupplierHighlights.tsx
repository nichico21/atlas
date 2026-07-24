"use client";

import { Check } from "lucide-react";

type SupplierHighlightsProps = {
  highlights: string[];
};

export default function SupplierHighlights({
  highlights,
}: SupplierHighlightsProps) {
  return (
    <ul className="space-y-2">
      {(highlights ?? []).map((highlight) => (
        <li
          key={highlight}
          className="flex items-start gap-3"
        >
          <Check
            size={16}
            className="mt-1 shrink-0 text-emerald-500"
            strokeWidth={2.5}
          />

          <span className="text-sm leading-6 text-slate-600">
            {highlight}
          </span>
        </li>
      ))}
    </ul>
  );
}