export function romanNumeral(value: number): string {
  if (value > 4) {
    return 'V' + 'I'.repeat(value - 5)
  }

  if (value === 4) {
    return 'IV'
  }

  return 'I'.repeat(value)
}
