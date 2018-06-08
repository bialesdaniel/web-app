import casual from 'casual-browserify'
import MockTeam from './Team'

class MockBracket {
  constructor() {
    this.id = casual.uuid
    this.name = casual.title
    this.teams = Array.from(new Array(16), () => new MockTeam())
  }
}

export default MockBracket
