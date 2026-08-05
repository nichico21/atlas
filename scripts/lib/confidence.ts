export function computeConfidence(
  sourceReliability: number,
  explicitlyStated: boolean
): number {
  const explicitnessFactor = explicitlyStated ? 1.0 : 0.6;
  return sourceReliability * explicitnessFactor;
}