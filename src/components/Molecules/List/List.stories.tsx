import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from './List';


storiesOf('Molecules', module)
.add('ListComponent', () =>  {
    const listElements = {
      1 : 'Cras a sagittis est, vitae congue ipsum. Sed sit amet',
      2: 'Cras a placerat turpis.',
    }
    return (
      <List listElements={listElements}/>
    )
  }
)

