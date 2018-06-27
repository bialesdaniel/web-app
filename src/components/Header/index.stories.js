import React from 'react'
import { storiesOf } from '@storybook/react'
import { AuthProvider } from '../../context/AuthContext'
import Header from './index'

storiesOf('Header', module)
  .add('logged in', () => (
    <AuthProvider authMethods={{ isAuthenticated: () => true }}>
      <Header location={{ pathname: '/' }} />
    </AuthProvider>
  ))
  .add('not logged in', () => <Header location={{ pathname: '/' }} />)
