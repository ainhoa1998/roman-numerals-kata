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
  ])('el número %i es %s', (arabic, roman) => {
    const result = romanNumeral(arabic)

    expect(result).toBe(roman)
  })
})
