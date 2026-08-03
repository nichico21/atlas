export interface ScoreBreakdown {
  strategic_value: number;
  information_richness: number;
  exploitability: number;
  reliability: number;
  coverage: number;
}

export function computeScore(
  scores: ScoreBreakdown
): number {

  return (
    scores.strategic_value +
    scores.information_richness +
    scores.exploitability +
    scores.reliability +
    scores.coverage
  );

}