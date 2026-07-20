import {
  Plus,
  Minus,
  SlidersHorizontal,
} from "lucide-react";

export default function MapControls() {
  return (
    <div className="absolute right-6 top-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <button className="flex h-12 w-12 items-center justify-center hover:bg-slate-50">
        <Plus size={20} />
      </button>

      <div className="border-t border-slate-200" />

      <button className="flex h-12 w-12 items-center justify-center hover:bg-slate-50">
        <Minus size={20} />
      </button>

      <div className="border-t border-slate-200" />

      <button className="flex h-12 w-12 items-center justify-center hover:bg-slate-50">
        <SlidersHorizontal size={18} />
      </button>

      <div className="border-t border-slate-200" />

      <div className="py-3 text-center text-xs text-slate-400">
        NIV. 1/4
      </div>

    </div>
  );
}