import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from './Card';

storiesOf('Atoms', module)
.add('Card', () => 
  <Card>
    Cras a sagittis est, vitae congue ipsum. Sed sit amet feugiat velit. Aliquam volutpat cursus arcu eu faucibus. Phasellus a dolor ut tellus iaculis interdum. 
    Sed id nisl interdum, scelerisque leo et, fermentum purus. Suspendisse pulvinar tortor at tristique fermentum. Etiam pretium ante justo, aliquam commodo mi lobortis id.    
  </Card>)
  