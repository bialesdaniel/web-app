import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AuthenticateButton from '../AuthenticateButton'
import Auth from '../../services/Auth'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class Header extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              The Bid
            </Typography>
            {this.props.auth.isAuthenticated() && (
              <IconButton>
                <AccountCircle color="inherit" />
              </IconButton>
            )}
            <AuthenticateButton auth={this.props.auth} />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(Header)
