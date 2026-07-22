"use client";

import { Upload } from "lucide-react";

type FileUploadZoneProps = {
  label: string;
};

export default function FileUploadZone({
  label,
}: FileUploadZoneProps) {
  return (
    <div className="flex flex-col gap-2">

      <label className="text-base font-semibold text-slate-800">
        {label}
      </label>

      <label
        className="
          flex
          h-52
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-2xl
          border-2
          border-dashed
          border-slate-300
          bg-slate-50
          transition-all
          duration-200

          hover:border-violet-400
          hover:bg-violet-50
        "
      >

        <Upload className="mb-4 h-10 w-10 text-slate-400" />

        <p className="text-lg font-semibold text-slate-700">
          Déposer un fichier
        </p>

        <p className="mt-1 text-sm text-slate-500">
          ou cliquez pour parcourir
        </p>

        <p className="mt-6 text-xs text-slate-400">
          PDF · DOCX · XLSX · PPTX
        </p>

        <input
          type="file"
          className="hidden"
        />

      </label>

    </div>
  );
}