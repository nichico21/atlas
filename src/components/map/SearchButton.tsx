"use client";

import { ChevronRight } from "lucide-react";

type SearchButtonProps = {
  companyCount: number;
  onClick?: () => void;
};

export default function SearchButton({
  companyCount,
  onClick,
}: SearchButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        group
        mt-6
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-blue-500
        px-6
        py-3.5
        text-base
        font-semibold
        text-white
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-xl
        hover:from-blue-700
        hover:to-blue-600
        active:translate-y-0
      "
    >
      <span>
        Voir les {companyCount} entreprises
      </span>

      <ChevronRight
        size={20}
        strokeWidth={2.5}
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </button>
  );
}