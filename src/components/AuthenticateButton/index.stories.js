import React from 'react'
import { storiesOf } from '@storybook/react'
import { AuthProvider } from '../../context/AuthContext'
import AuthenticateButton from './index'

storiesOf('AuthenticateButton', module)
  .add('not logged in', () => (
    <AuthProvider authMethods={{ isAuthenticated: () => false }}>
      <AuthenticateButton />
    </AuthProvider>
  ))
  .add('logged in', () => (
    <AuthProvider authMethods={{ isAuthenticated: () => true }}>
      <AuthenticateButton />
    </AuthProvider>
  ))
