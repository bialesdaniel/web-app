import { uuid, title, moment, integer, word } from 'casual-browserify'
import gql from 'graphql-tag'

export const MockTournament = {
  tournament: {
    __typename: 'Tournament',
    id: uuid,
    status: word,
    startDate: moment.toISOString(),
    endDate: moment.toISOString(),
    brackets: Array.from(new Array(4), () => ({
      __typename: 'Bracket',
      id: uuid,
      name: title,
      teams: Array.from(new Array(integer(16, 17)), () => ({
        __typename: 'Team',
        id: uuid,
        name: title + word,
        school: title,
        seed: integer(1, 16)
      }))
    }))
  }
}

export const GET_TOURNAMENT_QUERY = gql`
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
