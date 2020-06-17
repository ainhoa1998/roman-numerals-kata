describe('Kata Roman Numerals', () => {
  it('El elemento 1 devolverá el string I', () => {
    const roman = romanNumeral()

    expect(roman).toBe('I')
  })
})

function romanNumeral(): string {
  return 'I'
}
