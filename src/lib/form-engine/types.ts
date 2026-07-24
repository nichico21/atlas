export type FieldState = {
  value: unknown;

  required: boolean;

  valid: boolean;
};

export type SectionState = {
  id: string;

  fields: Record<string, FieldState>;
};

export type FormState = {
  sections: Record<string, SectionState>;
};