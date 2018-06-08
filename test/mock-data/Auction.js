import casual from 'casual-browserify'

class MockAuction {
  constructor() {
    this.id = casual.uuid
    this.name = casual.title
    this.owner = {
      username: casual.username
    }
  }
}

export default MockAuction
