import { roundToHundreths } from './index'

describe('utils', () => {
  describe('roundToHundreths', () => {
    test('round a number up', () => {
      const result = roundToHundreths(1.455)
      expect(result).toEqual(1.46)
    })
    test('round a number down', () => {
      const result = roundToHundreths(1.454)
      expect(result).toEqual(1.45)
    })
    test('dont round numbers that have less than two decimals', () => {
      const result = roundToHundreths(1)
      expect(result).toEqual(1)
    })
  })
})
