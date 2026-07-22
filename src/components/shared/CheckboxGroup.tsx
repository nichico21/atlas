"use client";

type CheckboxGroupProps = {
  label: string;
  required?: boolean;
  options: string[];
  columns?: 1 | 2;
};

export default function CheckboxGroup({
  label,
  required = false,
  options,
  columns = 2,
}: CheckboxGroupProps) {
  return (
    <div className="flex flex-col gap-3">

      <label className="text-base font-semibold text-slate-800">

        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}

      </label>

      <div
        className={
          columns === 2
            ? "grid grid-cols-2 gap-x-8 gap-y-2"
            : "flex flex-col gap-y-5"
        }
      >

        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-start gap-3 text-base leading-6 text-slate-700"
          >
            <input
              type="checkbox"
              className="
                mt-1
                h-5
                w-5
                shrink-0
                rounded
                border-slate-300
                text-violet-600
                focus:ring-violet-500
              "
            />

            <span>{option}</span>

          </label>
        ))}

      </div>

    </div>
  );
}