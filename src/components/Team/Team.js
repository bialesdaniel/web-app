import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import TeamContext from '../../context/TeamContext'
import BidButton from '../BidButton'

const styles = {
  text: {
    '& p': {
      paddingLeft: `20px`
    }
  }
}

const Team = ({ classes, currentValue, owner }) => {
  const { school, seed } = useContext(TeamContext)
  const { text } = classes
  return (
    <ListItem>
      <ListItemText className={text} primary={`${seed}. ${school}`} secondary={owner} />
      <ListItemSecondaryAction>
        <BidButton school={school} currentValue={currentValue} />
      </ListItemSecondaryAction>
    </ListItem>
  )
}

Team.propTypes = {
  classes: PropTypes.object,
  currentValue: PropTypes.number,
  owner: PropTypes.string
}

export default withStyles(styles)(Team)
