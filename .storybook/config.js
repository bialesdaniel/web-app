import React from 'react'
import { configure,addDecorator } from '@storybook/react'
import {JssProvider } from 'react-jss'
import { BrowserRouter } from 'react-router-dom'
import apolloStorybookDecorator from 'apollo-storybook-react'
import  { introspectSchema} from 'graphql-tools'
import octokit from '@octokit/rest'
import {MockTournament} from '../test/mock-data/get-tournament'
import {AuthProvider} from '../src/context/AuthContext'

const generateClassName = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}-${rule.key}`

addDecorator(story => (
  <JssProvider generateClassName={generateClassName}>
    {story()}
  </JssProvider>
))
addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
addDecorator(story=><AuthProvider authMethods={{isAuthenticated:()=>false}}>{story()}</AuthProvider>)

function loadStories() {
  const req = require.context('../src/',true,/\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

async function loadApolloMock(){
  /*const git = octokit()
  const {data} = await git.repos.getContent({owner:'the-bid',repo:'microservice-tournaments',path:'/src/schemas/schema.graphql'})
  const typeDefs = new Buffer(data.content,'base64').toString()
  addDecorator(apolloStorybookDecorator({
    typeDefs,
    mocks: {Query:()=>({tournament:()=>MockTournament.tournament})},
    links:()=>[]
  }))*/
}

//loadApolloMock().then(()=>configure(loadStories, module)).catch((e)=>console.log(e))
configure(loadStories,module)
