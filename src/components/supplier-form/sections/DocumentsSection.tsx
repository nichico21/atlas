import FileUploadZone from "@/components/shared/FileUploadZone";

export default function DocumentsSection() {
  return (
    <div className="grid grid-cols-3 gap-6">

      <FileUploadZone
        label="Photos / Vidéos"
      />

      <FileUploadZone
        label="Brochures / Présentations"
      />

      <FileUploadZone
        label="Autres documents utiles"
      />

    </div>
  );
}