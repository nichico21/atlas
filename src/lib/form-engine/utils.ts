import { SectionState } from "./types";

export function isSectionComplete(
  section: SectionState
) {
  const requiredFields = Object.values(section.fields)
    .filter((field) => field.required);

  if (requiredFields.length === 0) {
    return false;
  }

  return requiredFields.every(
    (field) => field.valid
  );
}