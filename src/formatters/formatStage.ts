const STAGE_LABELS: Record<string, string> = {
  identification: "Identification",
  feasibility: "Études de faisabilité",
  tender: "Appel d'offres",
  awarded: "Attribué",
  construction: "Construction",
  operation: "Exploitation",
};

export function formatStage(stage: string): string {
  return STAGE_LABELS[stage] ?? stage;
}