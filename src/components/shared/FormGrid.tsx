import { ReactNode } from "react";

type FormGridProps = {
  children: ReactNode;
};

export default function FormGrid({
  children,
}: FormGridProps) {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-4">
      {children}
    </div>
  );
}