import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import Team from '../Team'

const styles = theme => ({
  root: {
    margin: theme.spacing.unit
  },
  header: {
    backgroundColor: theme.palette.primary.light
  }
})

const Bracket = ({ classes, name, teams }) => {
  const { root, header } = classes
  return (
    <Paper elevation={2} className={root}>
      <List subheader={<ListSubheader className={header}>{name}</ListSubheader>}>
        {teams.map(team => (
          <Team key={team.id} id={team.id} school={team.school} seed={team.seed} />
        ))}
      </List>
    </Paper>
  )
}

Bracket.propTypes = {
  classes: PropTypes.object.isRequired,
  teams: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
}

export default withStyles(styles)(Bracket)
