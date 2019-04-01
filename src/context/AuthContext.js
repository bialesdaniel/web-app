import React, { createContext } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext()
const { Provider, Consumer } = AuthContext

const AuthProvider = ({ authMethods, children }) => {
  const handleAuthentication = nextState => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      authMethods.handleAuthentication()
    }
  }
  return <Provider value={{ auth: authMethods, handleAuthentication }}>{children}</Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
  authMethods: PropTypes.object.isRequired
}

export default AuthContext
export { Consumer as AuthConsumer }
export { AuthProvider }
