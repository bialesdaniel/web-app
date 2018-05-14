import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {API_GATEWAY_URL} from './config/config'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const apiGateway = new ApolloClient({
  uri: API_GATEWAY_URL,
  request: (operation)=>{
    const accessToken = localStorage.getItem('access_token')
    accessToken && operation.setContext({
      headers:{
        authorization:`Bearer ${accessToken}`
      }
    })
  }
})


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={apiGateway}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
   document.getElementById('root'))
registerServiceWorker()
