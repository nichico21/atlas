"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type OpportunityFilterProps = {
  title: string;
  placeholder: string;
  icon: React.ElementType;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
};

export default function OpportunityFilter({
  title,
  placeholder,
  icon: Icon,
  options,
  isOpen,
  onToggle,
}: OpportunityFilterProps) {
    const [selected, setSelected] = useState<string[]>([]);

  function toggleOption(option: string) {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-3 text-left"
      >
        <div className="flex items-center gap-4">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-900 text-white">
            <Icon size={18} />
          </div>

          <div>

            <p className="font-semibold text-slate-900">
              {title}
            </p>

            <p className="text-xs text-slate-500">
  {selected.length === 0
    ? placeholder
    : selected.length <= 2
    ? selected.join(", ")
    : `${selected.slice(0, 2).join(", ")} +${selected.length - 2}`}
</p>

          </div>

        </div>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />

      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-72 border-t border-slate-200" : "max-h-0"
        }`}
      >
        <div className="space-y-2 p-4">

          {options.map((option) => (

            <label
              key={option}
              className="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-slate-50"
            >
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
                className="h-4 w-4 accent-violet-600"
              />

              <span className="text-sm text-slate-700">
                {option}
              </span>

            </label>

          ))}

        </div>

      </div>

    </div>
  );
}