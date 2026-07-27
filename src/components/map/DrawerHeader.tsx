"use client";

import { MapPinned, Trophy, X } from "lucide-react";

import type { Region } from "@/types/region";

import Image from "next/image";

type DrawerHeaderProps = {
  region: Region;
  onClose: () => void;
};

export default function DrawerHeader({
  region,
  onClose,
}: DrawerHeaderProps) {
  return (
    <header className="px-5 pt-7 pb-0">

      <div className="relative">

  <button
    onClick={onClose}
    className="
      absolute
      right-0
      top-0
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

  <div className="grid grid-cols-[80px_1fr] gap-5">

    {/* Logo */}

    <div className="flex h-22 w-22 items-center justify-center">
      <Image
  src={region.logo}
  alt={region.name}
  width={88}
  height={88}
  className="object-contain"
/>
    </div>

    {/* Texte */}

    <div>

      <h2 className="text-2xl font-bold leading-tight text-slate-900 pr-12">
        {region.name}
      </h2>

      <div className="mt-2 flex items-center justify-between">

  <p className="text-base font-semibold leading-5 text-blue-600">
    {region.companyCount} entreprises
  </p>

  {region.rank !== undefined && (
    <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-700">
      <Trophy size={15} />

      {region.rank}
      {region.rank === 1 ? "ère" : "e"} région française
    </div>
  )}

</div>

    </div>

  </div>

</div>

      <p className="mt-4 text-sm leading-6 text-slate-600">
        {region.description}
      </p>

    </header>
  );
}