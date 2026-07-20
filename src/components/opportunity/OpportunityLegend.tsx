const legend = [
  { label: "> 300", color: "bg-violet-600" },
  { label: "100 – 300", color: "bg-violet-500" },
  { label: "30 – 100", color: "bg-violet-400" },
  { label: "< 30", color: "bg-violet-300" },
];

export default function OpportunityLegend() {
  return (
    <div className="absolute bottom-6 left-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-600">
        Nombre d'opportunités
      </p>

      <div className="space-y-3">

        {legend.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3"
          >
            <div
              className={`h-3 w-3 rounded-full ${item.color}`}
            />

            <span className="text-sm text-slate-600">
              {item.label}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}