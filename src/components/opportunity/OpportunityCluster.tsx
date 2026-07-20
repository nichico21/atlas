type OpportunityClusterProps = {
  value: number;
  label: string;
  top: string;
  left: string;
  size?: number;
};

export default function OpportunityCluster({
  value,
  label,
  top,
  left,
  size = 96,
}: OpportunityClusterProps) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        top,
        left,
      }}
    >
      <p className="mb-1 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <div
        className="flex items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-violet-700 text-white shadow-[0_0_35px_rgba(139,92,246,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_45px_rgba(139,92,246,0.75)]"
        style={{
          width: size,
          height: size,
        }}
      >
        <span className="text-xl font-bold">
          {value}
        </span>
      </div>
    </div>
  );
}