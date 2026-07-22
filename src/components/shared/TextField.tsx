"use client";

import { useState } from "react";

type TextFieldProps = {
  label: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  type?: string;
};

export default function TextField({
  label,
  placeholder = "",
  required = false,
  value = "",
  type = "text",
}: TextFieldProps) {

    const [filled, setFilled] = useState(value.length > 0);

  return (
    <div className="flex flex-col gap-2">

      <label className="text-base font-semibold text-slate-800">

        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}

      </label>

      <input
        onChange={(e) => setFilled(e.target.value.trim().length > 0)}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        className={`
h-10
w-full
rounded-xl
bg-white
px-4
text-base
text-slate-800
placeholder:text-slate-400
transition-all
duration-200
outline-none

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