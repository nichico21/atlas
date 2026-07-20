export function formatAmount(amount: number): string {
  if (amount >= 1000) {
    return `${(amount / 1000).toFixed(1).replace(".", ",")} Md €`;
  }

  return `${amount} M€`;
}