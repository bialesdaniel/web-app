import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import Button from 'material-ui/Button'

const styles = {}

class LoginSignupButton extends Component{
  handleLogin=()=>{
    this.props.auth.login()
  }
  handleLogout=()=>{
    this.props.auth.logout()
  }
  render(){
    const { isAuthenticated } = this.props.auth
    
    return(
      <div>
        {
          isAuthenticated()?
            <Button onClick={this.handleLogout} color='inherit'>Logout</Button>:
            <Button onClick={this.handleLogin} color='inherit'>Login</Button>
        }
      </div>
    )
  }
}

export default withStyles(styles)(LoginSignupButton)
