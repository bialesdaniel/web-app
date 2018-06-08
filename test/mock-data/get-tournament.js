import casual from 'casual-browserify'
import gql from 'graphql-tag'
casual.seed(42)
export const MockTournament = {
  tournament: {
    __typename: 'Tournament',
    id: casual.uuid,
    status: casual.word,
    startDate: casual.moment.toISOString(),
    endDate: casual.moment.toISOString(),
    brackets: Array.from(new Array(4), () => ({
      __typename: 'Bracket',
      id: casual.uuid,
      name: casual.title,
      teams: Array.from(new Array(casual.integer(16, 17)), () => ({
        __typename: 'Team',
        id: casual.uuid,
        name: casual.city + casual.word,
        school: casual.title,
        seed: casual.integer(1, 16)
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
