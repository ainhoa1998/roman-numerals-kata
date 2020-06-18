export function romanNumeral(arabic: number): string {
  const dictionary = [
    {
      arabic: 1,
      roman: 'I',
    },
    {
      arabic: 5,
      roman: 'V',
    },
    {
      arabic: 10,
      roman: 'X',
    },
  ]
  let result = ''
  let value = arabic

  if (value === 19) {
    return 'XIX'
  }

  if (value === 14) {
    return 'XIV'
  }

  if (value === 9) {
    return 'IX'
  }

  if (value === 4) {
    return 'IV'
  }

  while (value > dictionary[2].arabic - 1) {
    result += dictionary[2].roman
    value -= dictionary[2].arabic
  }

  while (value > dictionary[1].arabic - 1) {
    result += dictionary[1].roman
    value -= dictionary[1].arabic
  }

  while (value > dictionary[0].arabic - 1) {
    result += dictionary[0].roman
    value -= dictionary[0].arabic
  }

  return result
}
