import casual from 'casual-browserify'
import { roundToHundreths, getUserErrorMessage } from './index'

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
  describe('getUserErrorMessage', () => {
    test('Failed to fetch', () => {
      const result = getUserErrorMessage('Failed to fetch')
      expect(result).toEqual("I can't connect to the data. Please check your connection.")
    })
    test('Authroziation header Bearer token required', () => {
      const result = getUserErrorMessage('Authorization header Bearer token required')
      expect(result).toEqual("You shouldn't be here. \nPlease login.")
    })
    test('Undocumented error', () => {
      const gqlErrorMessage = casual.sentence
      const result = getUserErrorMessage(gqlErrorMessage)
      expect(result).toEqual(gqlErrorMessage)
    })
  })
})
