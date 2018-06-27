import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import BidButton from '../BidButton'

const styles = {
  text: {
    '& p': {
      paddingLeft: `20px`
    }
  }
}

class Team extends Component {
  render() {
    const { auctionId, currentValue, id, owner, seed, school } = this.props
    return (
      <ListItem>
        <ListItemText className={this.props.classes.text} primary={`${seed}. ${school}`} secondary={owner} />
        <ListItemSecondaryAction>
          <BidButton teamId={id} school={school} auctionId={auctionId} currentValue={currentValue} />
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

Team.propTypes = {
  auctionId: PropTypes.string.isRequired,
  classes: PropTypes.object,
  currentValue: PropTypes.number,
  id: PropTypes.string.isRequired,
  owner: PropTypes.string,
  school: PropTypes.string.isRequired,
  seed: PropTypes.number.isRequired
}

export default withStyles(styles)(Team)
