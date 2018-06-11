import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import casual from 'casual-browserify'
import CurrencyInputField from './CurrencyInputField'

storiesOf('Inputs', module).add('CurrencyInputField', () => (
  <CurrencyInputField
    value={parseFloat(casual.double(0, 1000).toFixed(2))}
    onChange={action('change')}
    onIncrease={action('increase')}
    onDecrease={action('decrease')}
  />
))
