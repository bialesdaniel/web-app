import casual from 'casual-browserify'

class MockTeam {
  constructor() {
    this.id = casual.uuid
    this.school = casual.title
    this.seed = casual.integer(1, 16)
  }
}

export default MockTeam
