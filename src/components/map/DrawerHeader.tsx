"use client";

import { MapPinned, Trophy, X } from "lucide-react";

import type { Region } from "@/types/region";

type DrawerHeaderProps = {
  region: Region;
  onClose: () => void;
};

export default function DrawerHeader({
  region,
  onClose,
}: DrawerHeaderProps) {
  return (
    <header className="mb-8">

      <div className="flex items-start justify-between">

        <div className="flex items-start gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
            <MapPinned
              size={28}
              className="text-blue-600"
            />
          </div>

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              {region.name}
            </h2>

            {region.rank !== undefined && (
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
                <Trophy size={16} />
                {region.rank}
                {region.rank === 1 ? "ère" : "e"} région française
              </div>
            )}

          </div>

        </div>

        <button
          onClick={onClose}
          className="
            rounded-xl
            p-2
            text-slate-500
            transition
            hover:bg-slate-100
            hover:text-slate-900
          "
        >
          <X size={20} />
        </button>

      </div>

      <p className="mt-5 text-sm leading-7 text-slate-600">
        {region.description}
      </p>

    </header>
  );
}