import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import casual from 'casual-browserify'
import NavMenuItem from './index'

storiesOf('Navigation|NavMenuItem', module)
  .add('default', () => <NavMenuItem location={{}} to={`/${casual.word}`} label={casual.title} />)
  .add('with onClick function', () => (
    <NavMenuItem onClick={action('click')} location={{}} to={`/${casual.word}`} label={casual.title} />
  ))
  .add('disabled', () => (
    <NavMenuItem onClick={action('click')} location={{}} to={`/${casual.word}`} label={casual.title} disabled={true} />
  ))
  .add('disabled with onDisabledClick function', () => (
    <NavMenuItem
      onClick={action('click')}
      location={{}}
      to={`/${casual.word}`}
      label={casual.title}
      disabled={true}
      onDisabledClick={action('disabled')}
    />
  ))
