import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Atoms', module)
.add('Button basic', () => <Button>Hello World</Button>)
.add('Button colored', () => <Button color={'#2979FF'}>Colored Button</Button>)
  