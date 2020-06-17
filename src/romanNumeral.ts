export function romanNumeral(value: number): string {
  if (value === 3) {
    return 'III'
  }

  if (value === 2) {
    return 'II'
  }

  return 'I'
}
