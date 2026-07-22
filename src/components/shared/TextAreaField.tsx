"use client";

import { useState } from "react";

type TextAreaFieldProps = {
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
};

export default function TextAreaField({
  label,
  placeholder = "",
  required = false,
  rows = 5,
}: TextAreaFieldProps) {
  const [filled, setFilled] = useState(false);

  return (
    <div className="flex flex-col gap-2">

      <label className="text-base font-semibold text-slate-800">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <textarea
        rows={rows}
        placeholder={placeholder}
        onChange={(e) => setFilled(e.target.value.trim().length > 0)}
        className={`
          w-full
          resize-none
          rounded-xl
          bg-white
          px-4
          py-3
          text-base
          placeholder:text-slate-400
          outline-none
          transition-all
          duration-200

          ${
            filled
              ? "border border-violet-300"
              : "border border-slate-200"
          }

          focus:border-violet-500
          focus:ring-4
          focus:ring-violet-100
        `}
      />
    </div>
  );
}