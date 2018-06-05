import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

class LoginSignupButton extends Component {
  handleLogin = () => {
    this.props.login()
  }
  handleLogout = () => {
    this.props.logout()
  }
  render() {
    const { isAuthenticated } = this.props

    return (
      <div>
        {isAuthenticated ? (
          <Button onClick={this.handleLogout} color="inherit">
            Logout
          </Button>
        ) : (
          <Button onClick={this.handleLogin} color="inherit">
            Login
          </Button>
        )}
      </div>
    )
  }
}

LoginSignupButton.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

export default LoginSignupButton
