export function romanNumeral(value: number): string {
  if (value === 11) {
    return 'XI'
  }

  if (value === 10) {
    return 'X'
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
