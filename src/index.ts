export const one = 1
export const two = 2

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest

  describe('should', () => {
    it('exported', () => {
      expect(2).toEqual(1)
    })
  })
}
