interface Dictionary {
  arabic: number
  roman: string
}

export function romanNumeral(arabic: number): string {
  const dictionary: Dictionary[] = [
    {
      arabic: 1,
      roman: 'I',
    },
    {
      arabic: 4,
      roman: 'IV',
    },
    {
      arabic: 5,
      roman: 'V',
    },
    {
      arabic: 9,
      roman: 'IX',
    },
    {
      arabic: 10,
      roman: 'X',
    },
  ]
  let result = ''
  let value = arabic

  if (dictionary.some((entry) => entry.arabic === arabic)) {
    return dictionary.find((entry) => entry.arabic === arabic).roman
  }

  while (value > dictionary[4].arabic - 1) {
    result += dictionary[4].roman
    value -= dictionary[4].arabic
  }

  if (value === dictionary[3].arabic) {
    result += dictionary[3].roman
    value -= dictionary[3].arabic
  }

  while (value > dictionary[2].arabic - 1) {
    result += dictionary[2].roman
    value -= dictionary[2].arabic
  }

  if (value === dictionary[1].arabic) {
    result += dictionary[1].roman
    value -= dictionary[1].arabic
  }

  while (value > dictionary[0].arabic - 1) {
    result += dictionary[0].roman
    value -= dictionary[0].arabic
  }

  return result
}
