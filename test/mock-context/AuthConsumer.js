export const mockAuth = { isAuthenticated: jest.fn(() => false), login: jest.fn(), logout: jest.fn() }

export function mockAuthConsumer() {
  return {
    AuthConsumer: ({ children }) => children({ auth: mockAuth }),
    AuthProvider: ({ children }) => children
  }
}
