import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { AuthConsumer } from '../../context/AuthContext'

class LoginSignupButton extends Component {
  render() {
    return (
      <AuthConsumer>
        {({ auth }) => {
          return (
            <Button onClick={auth.isAuthenticated() ? auth.logout : auth.login} color="inherit">
              {auth.isAuthenticated() ? 'Logout' : 'Login'}
            </Button>
          )
        }}
      </AuthConsumer>
    )
  }
}

export default LoginSignupButton
