const configuration = {
  API_GATEWAY_URL: process.env.REACT_APP_API_GATEWAY_URL
}

if (process.env.NODE_ENV !== 'production') {
  configuration.PUBLIC_URL = 'http://localhost:3000'
}

module.exports = configuration
