import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { word, title } from 'casual-browserify'
import NavMenuItem from './index'

storiesOf('NavMenuItem', module)
  .add('default', () => <NavMenuItem location={{}} to={`/${word}`} label={title} />)
  .add('with onClick function', () => (
    <NavMenuItem onClick={action('click')} location={{}} to={`/${word}`} label={title} />
  ))
  .add('disabled', () => (
    <NavMenuItem onClick={action('click')} location={{}} to={`/${word}`} label={title} disabled={true} />
  ))
  .add('disabled with onDisabledClick function', () => (
    <NavMenuItem
      onClick={action('click')}
      location={{}}
      to={`/${word}`}
      label={title}
      disabled={true}
      onDisabledClick={action('disabled')}
    />
  ))
