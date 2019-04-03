import React, { createContext } from 'react'
import PropTypes from 'prop-types'

const TeamContext = createContext()
const { Provider, Consumer } = TeamContext

const TeamProvider = ({ children, school, seed, teamId }) => (
  <Provider value={{ school, seed, teamId }}>{children}</Provider>
)

TeamProvider.propTypes = {
  children: PropTypes.element.isRequired,
  school: PropTypes.string.isRequired,
  seed: PropTypes.number,
  teamId: PropTypes.string.isRequired
}

export default TeamContext
export { Consumer as TeamConsumer }
export { TeamProvider }
