import { romanNumeral } from '../src/romanNumeral'

describe('Kata Roman Numerals', () => {
  it.each([
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [9, 'IX'],
    [10, 'X'],
    [11, 'XI'],
    [14, 'XIV'],
    [15, 'XV'],
    [16, 'XVI'],
    [17, 'XVII'],
    [19, 'XIX'],
    [24, 'XXIV'],
    [29, 'XXIX'],
    [40, 'XL'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [400, 'CD'],
    [500, 'D'],
  ])('el número %i es %s', (arabic, roman) => {
    const result = romanNumeral(arabic)

    expect(result).toBe(roman)
  })
})
