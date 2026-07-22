"use client";

import { CalendarDays } from "lucide-react";

type DateFieldProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
};

export default function DateField({
  label,
  required = false,
  placeholder = "JJ/MM/AAAA",
}: DateFieldProps) {
  return (
    <div className="flex flex-col gap-2">

      <label className="text-base font-semibold text-slate-800">

        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}

      </label>

      <div className="relative">

        <input
          type="text"
          placeholder={placeholder}
          className="
            h-10
            w-full
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            pr-14
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

        <CalendarDays
          className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
        />

      </div>

    </div>
  );
}