import { get } from 'lodash'
export function roundToHundreths(value) {
  return Math.round(value * 100) / 100
}

export function getUserErrorMessage(gqlErrorMessage) {
  const error = gqlErrorMessage.replace(/(GraphQL error|Network error):\s+/, '')
  const ERROR_MAP = {
    'Failed to fetch': "I can't connect to the data. Please check your connection.",
    'Authorization header Bearer token required': "You shouldn't be here. \nPlease login."
  }
  return get(ERROR_MAP, error, error)
}
