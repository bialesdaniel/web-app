import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Auth from '../../services/Auth'

const styles = {}

class LoginSignupButton extends Component {
  handleLogin = () => {
    this.props.auth.login()
  }
  handleLogout = () => {
    this.props.auth.logout()
  }
  render() {
    const { isAuthenticated } = this.props.auth

    return (
      <div>
        {isAuthenticated() ? (
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
  auth: PropTypes.instanceOf(Auth).isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(LoginSignupButton)
