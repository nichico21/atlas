import { List, Map } from "lucide-react";

type ViewToggleProps = {
  view: "map" | "list";
  onViewChange: (view: "map" | "list") => void;
  accentColor?: "violet" | "blue";
};

export default function ViewToggle({
  view,
  onViewChange,
  accentColor = "violet",
}: ViewToggleProps) {
  const activeClass =
    accentColor === "violet"
      ? "bg-violet-600 text-white"
      : "bg-blue-600 text-white";

  return (
    <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1">
      <button
        onClick={() => onViewChange("map")}
        className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
          view === "map"
            ? activeClass
            : "text-slate-600 hover:bg-slate-100"
        }`}
      >
        <Map size={16} />
        Carte
      </button>

      <button
        onClick={() => onViewChange("list")}
        className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
          view === "list"
            ? activeClass
            : "text-slate-600 hover:bg-slate-100"
        }`}
      >
        <List size={16} />
        Liste
      </button>
    </div>
  );
}