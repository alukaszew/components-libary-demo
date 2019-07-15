import * as React from 'react';
import { ListWrapper, ListItem } from './styled';
import { IListProps } from './IList';
import { Card } from '../../Atoms/Card';
import { Button } from '../../Atoms/Button';

export const List: React.FC<IListProps> = ({ listElements }) => {
  return (
    <ListWrapper>
      {Object.values(listElements).map((e: any) => 
        <ListItem>
          <Card>
            {e}
          </Card>
          <Button color="red">Test</Button>
        </ListItem>
      )}
    </ListWrapper>
  );
};

