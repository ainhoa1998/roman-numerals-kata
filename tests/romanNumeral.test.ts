import { romanNumeral } from '../src/romanNumeral'

describe('Kata Roman Numerals', () => {
  it('El elemento 1 devolverá el string I', () => {
    const result = romanNumeral()

    expect(result).toBe('I')
  })
})
