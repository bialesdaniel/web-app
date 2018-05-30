import { integer, uuid, title } from 'casual-browserify'

class MockTeam {
  constructor() {
    this.id = uuid
    this.school = title
    this.seed = integer(1, 16)
  }
}

export default MockTeam
