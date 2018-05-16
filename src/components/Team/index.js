import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

class Team extends Component {
  render() {
    const { seed, school } = this.props.team
    return (
      <ListItem>
        <ListItemText primary={`${seed}. ${school}`} />
      </ListItem>
    )
  }
}

Team.propTypes = {
  team: PropTypes.object.isRequired
}

export default Team
