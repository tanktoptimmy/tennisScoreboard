import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
// import Button from './Button';
// import Welcome from './Welcome';

import BallIcon from '../src/components/BallIcon'

storiesOf('Icons', module)
  .add('Ball Icon', () => (
    <BallIcon/>
  ));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
//   ));
