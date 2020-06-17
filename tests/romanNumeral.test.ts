import { romanNumeral } from '../src/romanNumeral'

describe('Kata Roman Numerals', () => {
  it('El número 1 es I', () => {
    const result = romanNumeral()

    expect(result).toBe('I')
  })
})
