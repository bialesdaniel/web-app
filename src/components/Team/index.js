import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

class Team extends Component {
  render() {
    const { seed, school } = this.props
    return (
      <ListItem>
        <ListItemText primary={`${seed}. ${school}`} />
      </ListItem>
    )
  }
}

Team.propTypes = {
  school: PropTypes.string.isRequired,
  seed: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
}

export default Team
