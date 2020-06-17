import { romanNumeral } from '../src/romanNumeral'

describe('Kata Roman Numerals', () => {
  it('El número 1 es I', () => {
    const result = romanNumeral(1)

    expect(result).toBe('I')
  })

  it('El número 2 es II', () => {
    const result = romanNumeral(2)

    expect(result).toBe('II')
  })
})
