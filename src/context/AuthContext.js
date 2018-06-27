import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'

const { Provider, Consumer } = createContext()
export { Consumer as AuthConsumer }
class AuthProvider extends Component {
  state = {
    auth: this.props.authMethods,
    handleAuthentication: nextState => {
      if (/access_token|id_token|error/.test(nextState.location.hash)) {
        this.state.auth.handleAuthentication()
      }
    }
  }
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
  authMethods: PropTypes.object.isRequired
}
export { AuthProvider }
