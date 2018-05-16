import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AuthenticateButton from '../AuthenticateButton'
import Auth from '../../services/Auth'

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  headerLink: {
    flex: 1,
    color: 'inherit',
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
    }
  }
}

class Header extends Component {
  render() {
    const { classes, location, auth } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} aria-label="Menu">
              <MenuIcon />
            </IconButton>

            <Link to="/" replace={location.pathname === '/'} className={classes.headerLink}>
              <Typography variant="title" color="inherit">
                The Bid
              </Typography>
            </Link>

            {this.props.auth.isAuthenticated() && (
              <IconButton>
                <AccountCircle color="inherit" />
              </IconButton>
            )}

            <AuthenticateButton auth={auth} />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  classes: PropTypes.object,
  location: PropTypes.object.isRequired
}

export default withStyles(styles)(withRouter(Header))
