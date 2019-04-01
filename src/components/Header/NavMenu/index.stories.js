import React from 'react'
import { storiesOf } from '@storybook/react'
import { AuthProvider } from '../../../context/AuthContext'
import NavMenu from './index'
storiesOf('Navigation|NavMenu', module)
  .add('not logged in', () => (
    <AuthProvider authMethods={{ isAuthenticated: () => false }}>
      <NavMenu open={true} toggleMenu={() => {}} />
    </AuthProvider>
  ))
  .add('logged in', () => (
    <AuthProvider authMethods={{ isAuthenticated: () => true }}>
      <NavMenu open={true} toggleMenu={() => {}} />
    </AuthProvider>
  ))
  .add('closed', () => (
    <AuthProvider authMethods={{ isAuthenticated: () => false }}>
      <NavMenu open={false} toggleMenu={() => {}} />
    </AuthProvider>
  ))
