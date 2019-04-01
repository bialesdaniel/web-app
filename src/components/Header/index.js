import React, { useState, useContext } from 'react'
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
import AuthContext from '../../context/AuthContext'
import AuthenticateButton from '../AuthenticateButton'
import NavMenu from './NavMenu'

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

const Header = ({ classes, location }) => {
  const { root, menuButton, headerLink } = classes
  const { pathname } = location
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const { auth } = useContext(AuthContext)
  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={menuButton} aria-label="Menu" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
          <NavMenu open={isMenuOpen} toggleMenu={toggleMenu} />

          <Link to="/" replace={pathname === '/'} className={headerLink}>
            <Typography variant="title" color="inherit">
              The Bid
            </Typography>
          </Link>

          {auth.isAuthenticated() && (
            <IconButton>
              <AccountCircle color="inherit" />
            </IconButton>
          )}

          <AuthenticateButton />
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default withStyles(styles)(withRouter(Header))
