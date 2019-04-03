import React from 'react'
import { configure,addDecorator } from '@storybook/react'
import {JssProvider } from 'react-jss'
import { BrowserRouter } from 'react-router-dom'
import apolloStorybookDecorator from 'apollo-storybook-react'
import  { introspectSchema} from 'graphql-tools'
import octokit from '@octokit/rest'
import casual from 'casual-browserify'
import {MockTournament} from '../test/mock-data/get-tournament'
import {AuthProvider} from '../src/context/AuthContext'
import {AuctionProvider} from '../src/context/AuctionContext'
import requireContext from 'require-context.macro'

if (typeof window !== 'object') {
  global.window = global
  global.window.navigator = {};
}
window.addEventListener = () => {}
window.requestAnimationFrame = () => {
  throw new Error('requestAnimationFrame is not supported in Node')
}

const generateClassName = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}-${rule.key}`

addDecorator(story => (
  <JssProvider generateClassName={generateClassName}>
    {story()}
  </JssProvider>
))
addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
addDecorator(story=><AuthProvider authMethods={{isAuthenticated:()=>false}}>{story()}</AuthProvider>)
addDecorator(story=><AuctionProvider auctionId={'123'}>{story()}</AuctionProvider>)


function loadStories() {
  const req = requireContext('../src/',true,/\.stories\.js$/)
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
