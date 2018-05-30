import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
  nav: {
    textDecoration: 'none'
  },
  activeNav: {
    textDecoration: 'none',
    '& :hover, & li': {
      backgroundColor: theme.palette.secondary.dark
    }
  }
})

class NavMenuItem extends Component {
  handleDisabledClick = e => {
    e.preventDefault()
    this.props.onDisabledClick()
  }
  render() {
    const { classes, location, onClick, to, label, disabled } = this.props
    return (
      <NavLink
        exact
        to={to}
        onClick={!disabled ? onClick : this.handleDisabledClick}
        className={classes.nav}
        activeClassName={classes.activeNav}
        replace={location.pathname === to}
      >
        <MenuItem disabled={disabled}>
          <ListItemText primary={label} />
        </MenuItem>
      </NavLink>
    )
  }
}

NavMenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  location: PropTypes.object.isRequired, //TODO: This won't be necessary if this PR goes through https://github.com/ReactTraining/history/pull/570#pullrequestreview-117286700
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onDisabledClick: PropTypes.func
}

NavMenuItem.defaultProps = {
  onClick: NavMenuItem.onClickDisabled,
  onDisabledClick: () => {}
}

export default withStyles(styles)(withRouter(NavMenuItem))
