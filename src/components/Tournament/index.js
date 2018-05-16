import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Bracket from '../Bracket'

const GET_TOURNAMENT = gql`
  query tournament($year: Int!) {
    tournament(year: $year) {
      id
      status
      startDate
      endDate
      brackets {
        id
        name
        teams {
          id
          name
          school
          seed
        }
      }
    }
  }
`

class Tournament extends Component {
  render() {
    const { year } = this.props
    return (
      <Query query={GET_TOURNAMENT} variables={{ year: year.getYear() }}>
        {({ loading, error, data }) => {
          if (loading) return <CircularProgress />
          if (error) return <Typography variant="subheading">{error}</Typography>
          const { tournament } = data
          return (
            <Grid container direction="row" justify="space-between">
              {tournament.brackets.map(bracket => (
                <Grid key={bracket.id} item md={3} sm={6} xs={12}>
                  <Bracket bracket={bracket} />
                </Grid>
              ))}
            </Grid>
          )
        }}
      </Query>
    )
  }
}

Tournament.propTypes = {
  year: PropTypes.instanceOf(Date)
}

export default Tournament
