interface Dictionary {
  arabic: number
  roman: string
}

export function romanNumeral(arabic: number): string {
  const dictionary: Dictionary[] = [
    {
      arabic: 1000,
      roman: 'M',
    },
    {
      arabic: 900,
      roman: 'CM',
    },
    {
      arabic: 500,
      roman: 'D',
    },
    {
      arabic: 400,
      roman: 'CD',
    },
    {
      arabic: 100,
      roman: 'C',
    },
    {
      arabic: 90,
      roman: 'XC',
    },
    {
      arabic: 50,
      roman: 'L',
    },
    {
      arabic: 40,
      roman: 'XL',
    },
    {
      arabic: 10,
      roman: 'X',
    },
    {
      arabic: 1,
      roman: 'I',
    },
    {
      arabic: 9,
      roman: 'IX',
    },
    {
      arabic: 5,
      roman: 'V',
    },
    {
      arabic: 4,
      roman: 'IV',
    },
  ].sort(function (a, b) {
    return b.arabic - a.arabic
  })

  if (dictionary.some((entry) => entry.arabic === arabic)) {
    return dictionary.find((entry) => entry.arabic === arabic).roman
  }

  let result = ''
  let value = arabic
  while (value > 0) {
    result += dictionary.find((entry) => value >= entry.arabic).roman
    value -= dictionary.find((entry) => value >= entry.arabic).arabic
  }

  return result
}
