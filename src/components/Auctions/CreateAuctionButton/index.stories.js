import React from 'react'
import { storiesOf } from '@storybook/react'
import { AuthProvider } from '../../../context/AuthContext'
import CreateAuctionButton from './index'

storiesOf('Auctions|CreateAuctionButton', module)
  .add('logged in', () => (
    <AuthProvider authMethods={{ isAuthenticated: () => true }}>
      <CreateAuctionButton />
    </AuthProvider>
  ))
  .add('not logged in', () => (
    <AuthProvider authMethods={{ isAuthenticated: () => false }}>
      <CreateAuctionButton />
    </AuthProvider>
  ))
