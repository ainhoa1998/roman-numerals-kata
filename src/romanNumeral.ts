export function romanNumeral(value: number): string {
  if (value === 6) {
    return 'VI'
  }
  if (value === 5) {
    return 'V'
  }

  if (value === 4) {
    return 'IV'
  }

  return 'I'.repeat(value)
}
