import { uuid, title, username } from 'casual-browserify'

class MockAuction {
  constructor() {
    this.id = uuid
    this.name = title
    this.owner = {
      username: username
    }
  }
}

export default MockAuction
