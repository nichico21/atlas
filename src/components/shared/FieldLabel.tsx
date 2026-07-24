type FieldLabelProps = {
  label: string;
  required?: boolean;
  optional?: boolean;
};

export default function FieldLabel({
  label,
  required = false,
  optional = false,
}: FieldLabelProps) {
  return (
    <label className="mb-2 block text-sm font-semibold text-slate-900">
      {label}

      {required && (
        <span className="ml-1 text-red-500">*</span>
      )}

      {optional && (
        <span className="ml-1 font-normal text-slate-400">
          (optionnel)
        </span>
      )}
    </label>
  );
}