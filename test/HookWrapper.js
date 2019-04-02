import React from 'react'
import PropTypes from 'prop-types'

const HookWrapper = ({ hook }) => <div hook={hook()} />
HookWrapper.propTypes = {
  hook: PropTypes.func.isRequired
}
export default HookWrapper
