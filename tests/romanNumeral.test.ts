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

  it('El número 3 es III', () => {
    const result = romanNumeral(3)

    expect(result).toBe('III')
  })

  it('El número 4 es IV', () => {
    const result = romanNumeral(4)

    expect(result).toBe('IV')
  })

  it('El número 5 es V', () => {
    const result = romanNumeral(5)

    expect(result).toBe('V')
  })

  it('El número 6 es VI', () => {
    const result = romanNumeral(6)

    expect(result).toBe('VI')
  })

  it('El número 9 es IX', () => {
    const result = romanNumeral(9)

    expect(result).toBe('IX')
  })
})
