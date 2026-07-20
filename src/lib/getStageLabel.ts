const stageLabels: Record<string, string> = {
  identification: "Identification",
  feasibility: "Études de faisabilité",
  tender: "Appel d'offres",
  awarded: "Attribué",
  construction: "Construction",
  operation: "En exploitation",
};

export function getStageLabel(stage: string) {
  return stageLabels[stage] ?? stage;
}