import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import Divider from '@material-ui/core/Divider'
import NavMenuItem from '../NavMenuItem'

class NavMenu extends Component {
  render() {
    const { open, toggleMenu } = this.props
    return (
      <SwipeableDrawer open={open} onOpen={toggleMenu} onClose={toggleMenu}>
        <MenuList>
          <MenuItem onClick={toggleMenu}>
            <ListItemSecondaryAction>
              <IconButton>
                <KeyboardArrowLeftIcon onClick={toggleMenu} />
              </IconButton>
            </ListItemSecondaryAction>
          </MenuItem>
          <Divider />
          <NavMenuItem to="/" onClick={toggleMenu} label="Home" />
          <NavMenuItem to="/auctions/new" onClick={toggleMenu} label="Create Auction" />
          <Divider />
          <NavMenuItem to="/rules" onClick={toggleMenu} label="Rules" />
          <NavMenuItem to="/about" onClick={toggleMenu} label="About" />
        </MenuList>
      </SwipeableDrawer>
    )
  }
}

NavMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default NavMenu
