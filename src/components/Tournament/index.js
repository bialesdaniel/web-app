import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Tournament from './Tournament'

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

class TournamentGQL extends Component {
  render() {
    const { date } = this.props
    const seasonYear = date.getMonth() <= 3 ? date.getYear() - 1 : date.getYear()
    return (
      <Query query={GET_TOURNAMENT} variables={{ year: seasonYear }}>
        {({ loading, error, data }) => {
          if (loading) return <CircularProgress />
          if (error) return <Typography variant="subheading">{error}</Typography>
          const { tournament } = data
          return <Tournament brackets={tournament.brackets} />
        }}
      </Query>
    )
  }
}

TournamentGQL.propTypes = {
  date: PropTypes.instanceOf(Date)
}

export default TournamentGQL
