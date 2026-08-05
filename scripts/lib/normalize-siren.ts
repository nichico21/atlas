export function normalizeSiren(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const digits = raw.replace(/\D/g, "");
  return digits.length >= 9 ? digits.slice(0, 9) : null;
}