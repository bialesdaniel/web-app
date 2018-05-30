import MockBracket from './Bracket'

class MockTournament {
  constructor() {
    this.brackets = Array.from(new Array(4), () => new MockBracket())
  }
}

export default MockTournament
