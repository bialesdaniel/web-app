import { uuid, title } from 'casual-browserify'
import MockTeam from './Team'

class MockBracket {
  constructor() {
    this.id = uuid
    this.name = title
    this.teams = Array.from(new Array(16), () => new MockTeam())
  }
}

export default MockBracket
