export function romanNumeral(value: number): string {
  if (value === 4) {
    return 'IV'
  }
  return 'I'.repeat(value)
}
