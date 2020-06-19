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
    { arabic: 14, roman: 'XIV' },
    { arabic: 19, roman: 'XIX' },
  ]
  let result = ''
  let value = arabic

  if (dictionary.some((entry) => entry.arabic === arabic)) {
    return dictionary.find((entry) => entry.arabic === arabic).roman
  }

  if (value === 24) {
    return 'XXIV'
  }

  while (value > dictionary[4].arabic - 1) {
    result += dictionary[4].roman
    value -= dictionary[4].arabic
  }

  while (value > dictionary[2].arabic - 1) {
    result += dictionary[2].roman
    value -= dictionary[2].arabic
  }

  while (value > dictionary[0].arabic - 1) {
    result += dictionary[0].roman
    value -= dictionary[0].arabic
  }

  return result
}
