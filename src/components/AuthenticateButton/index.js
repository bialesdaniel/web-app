import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

class LoginSignupButton extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props
    return (
      <Button onClick={isAuthenticated ? logout : login} color="inherit">
        {isAuthenticated ? 'Logout' : 'Login'}
      </Button>
    )
  }
}

LoginSignupButton.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

export default LoginSignupButton
