"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type SelectFieldProps = {
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
};

export default function SelectField({
  label,
  placeholder = "Sélectionner...",
  required = false,
  options = [],
}: SelectFieldProps) {
  const [filled, setFilled] = useState(false);

  return (
    <div className="flex flex-col gap-2">

      <label
        className={`text-base font-semibold transition-colors duration-200 ${
          filled ? "text-black-800" : "text-slate-800"
        }`}
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <div className="relative">

        <select
          defaultValue=""
          onChange={(e) => setFilled(e.target.value !== "")}
          className={`
            h-12
            w-full
            appearance-none
            rounded-xl
            bg-white
            px-4
            text-base
            outline-none
            transition-all
            duration-200

            ${
              filled
                ? "border border-violet-300 text-slate-800"
                : "border border-slate-200 text-slate-500"
            }

            focus:border-violet-500
            focus:ring-4
            focus:ring-violet-100
          `}
        >
          <option value="">
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}

        </select>

        <ChevronDown
          className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
        />

      </div>

    </div>
  );
}