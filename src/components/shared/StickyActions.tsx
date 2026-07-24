"use client";

type StickyActionsProps = {
  color?: "violet" | "blue";
  publishLabel?: string;
  draftLabel?: string;
};

export default function StickyActions({
  color = "violet",
  publishLabel = "Publier l'opportunité",
  draftLabel = "Enregistrer le brouillon",
}: StickyActionsProps) {
  const primaryButton =
    color === "blue"
      ? "bg-blue-600 hover:bg-blue-700"
      : "bg-violet-600 hover:bg-violet-700";

  return (
    <div className="space-y-3">

      <button
        className={`
          w-full
          rounded-2xl
          px-6
          py-3
          text-lg
          font-semibold
          text-white
          shadow-sm
          transition-all
          duration-200
          hover:shadow-lg
          ${primaryButton}
        `}
      >
        {publishLabel}
      </button>

      <button
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white
          px-6
          py-3
          text-lg
          font-semibold
          text-slate-700
          shadow-sm
          transition-all
          duration-200
          hover:border-slate-300
          hover:bg-slate-50
          hover:shadow-md
        "
      >
        {draftLabel}
      </button>

    </div>
  );
}