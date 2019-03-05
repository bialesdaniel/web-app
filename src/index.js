import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import 'react-app-polyfill/ie9' // For IE 9-11 support
import 'react-app-polyfill/ie11' // For IE 11 support
import { API_GATEWAY_URL } from './config/config'
import './styles/index.css'
import App from './components/App'
import { AuthProvider } from './context/AuthContext'
import registerServiceWorker from './registerServiceWorker'
import Auth from './services/Auth'

const apiGateway = new ApolloClient({
  uri: API_GATEWAY_URL,
  request: operation => {
    const accessToken = localStorage.getItem('access_token')
    accessToken &&
      operation.setContext({
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      })
  }
})
const auth = new Auth()
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={apiGateway}>
      <AuthProvider authMethods={auth}>
        <App />
      </AuthProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
