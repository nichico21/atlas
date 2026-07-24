import { ReactNode } from "react";

import CharacterCounter from "./CharacterCounter";
import FieldLabel from "./FieldLabel";

type FieldContainerProps = {
  label: string;

  required?: boolean;

  optional?: boolean;

  currentLength?: number;

  maxLength?: number;

  children: ReactNode;
};

export default function FieldContainer({
  label,
  required = false,
  optional = false,
  currentLength,
  maxLength,
  children,
}: FieldContainerProps) {
  return (
    <div>

      <FieldLabel
        label={label}
        required={required}
        optional={optional}
      />

      {children}

      {maxLength !== undefined && (
        <CharacterCounter
          current={currentLength ?? 0}
          max={maxLength}
        />
      )}

    </div>
  );
}