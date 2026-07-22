"use client";

import { Search } from "lucide-react";

type SearchFieldProps = {
  label: string;
  placeholder?: string;
  required?: boolean;
};

export default function SearchField({
  label,
  placeholder = "",
  required = false,
}: SearchFieldProps) {
  return (
    <div className="flex flex-col gap-2">

      <label className="text-base font-semibold text-slate-800">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <div className="relative">

        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
        />

        <input
          placeholder={placeholder}
          className="
            h-12
            w-full
            rounded-xl
            border
            border-slate-200
            bg-white
            pl-12
            pr-4
            text-base
            placeholder:text-slate-400
            outline-none
            transition-all
            duration-200

            focus:border-violet-500
            focus:ring-4
            focus:ring-violet-100
          "
        />

      </div>

    </div>
  );
}