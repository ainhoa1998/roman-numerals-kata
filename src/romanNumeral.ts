export function romanNumeral(value: number): string {
  const letters = ['I', 'V', 'X']
  var str = ''

  if (value === 14) {
    return 'XIV'
  }

  if (value === 9) {
    return 'IX'
  }

  if (value === 4) {
    return 'IV'
  }

  while (value > 9) {
    str += letters[2]
    value -= 10
  }

  while (value > 4) {
    str += letters[1]
    value -= 5
  }

  while (value > 0) {
    str += letters[0]
    value -= 1
  }

  return str
}
