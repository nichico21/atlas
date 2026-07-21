type CompatibilityScoreProps = {
  score: number;
};

export default function CompatibilityScore({
  score,
}: CompatibilityScoreProps) {
  const color =
    score >= 90
      ? "text-emerald-600"
      : score >= 75
      ? "text-amber-500"
      : "text-red-500";

  const border =
    score >= 90
      ? "border-emerald-600"
      : score >= 75
      ? "border-amber-500"
      : "border-red-500";

  return (
    <div
      className={`flex h-16 w-16 flex-col items-center justify-center rounded-full border-[4px] ${border} bg-white`}
    >
      <span className={`text-2xl font-black ${color}`}>
        {score}
      </span>

      <span className="text-xs font-semibold text-slate-500">
        %
      </span>
    </div>
  );
}