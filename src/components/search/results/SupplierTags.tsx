"use client";

type SupplierTagsProps = {
  tags: string[];
};

export default function SupplierTags({
  tags,
}: SupplierTagsProps) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {(tags ?? []).map((tag) => (
        <span
          key={tag}
          className="
            rounded-md
            bg-slate-100
            px-3
            py-1
            text-xs
            font-medium
            text-slate-700
          "
        >
          {tag}
        </span>
      ))}
    </div>
  );
}