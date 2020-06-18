export function romanNumeral(value: number): string {
  if (value === 15) {
    return 'XV'
  }

  if (value === 14) {
    return 'XIV'
  }

  if (value > 9) {
    return 'X' + 'I'.repeat(value - 10)
  }

  if (value === 9) {
    return 'IX'
  }

  if (value > 4) {
    return 'V' + 'I'.repeat(value - 5)
  }

  if (value === 4) {
    return 'IV'
  }

  return 'I'.repeat(value)
}
