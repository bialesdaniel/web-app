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
  render() {
    const { classes, location, onClick, to, label } = this.props
    return (
      <NavLink
        exact
        to={to}
        onClick={onClick}
        className={classes.nav}
        activeClassName={classes.activeNav}
        replace={location.pathname === to}
      >
        <MenuItem>
          <ListItemText color="inherit" primary={label} />
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
  label: PropTypes.string.isRequired
}

NavMenuItem.defaultProps = {
  onClick: () => {}
}

export default withStyles(styles)(withRouter(NavMenuItem))
