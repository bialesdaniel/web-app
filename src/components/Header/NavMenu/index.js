import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuList from '@material-ui/core/MenuList'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
import NavMenuItem from '../NavMenuItem'
import InfoSnackBar, { LOGIN_REQUIRED_MESSAGE } from '../../Messaging/SnackBars/Info'

const styles = () => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    justifyContent: 'flex-end'
  }
})

const NavMenu = ({ classes, isAuthenticated, open, toggleMenu }) => {
  const [isMessageOpen, setIsMessageOpen] = useState(false)
  const toggleLoginMessage = () => setIsMessageOpen(!isMessageOpen)
  return (
    <div>
      <SwipeableDrawer open={open} onOpen={toggleMenu} onClose={toggleMenu}>
        <MenuList>
          <div className={classes.drawerHeader}>
            <IconButton onClick={toggleMenu}>
              <KeyboardArrowLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <NavMenuItem to="/" onClick={toggleMenu} label="Home" />
          <NavMenuItem
            to="/auctions/new"
            onClick={toggleMenu}
            label="Create Auction"
            disabled={!isAuthenticated()}
            onDisabledClick={toggleLoginMessage}
          />
          <Divider />
          <NavMenuItem to="/rules" onClick={toggleMenu} label="Rules" />
          <NavMenuItem to="/about" onClick={toggleMenu} label="About" />
        </MenuList>
      </SwipeableDrawer>
      <InfoSnackBar isOpen={isMessageOpen} onClose={toggleLoginMessage} message={LOGIN_REQUIRED_MESSAGE} />
    </div>
  )
}

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default withStyles(styles)(NavMenu)
