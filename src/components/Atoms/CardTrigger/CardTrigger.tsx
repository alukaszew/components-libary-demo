import * as React from 'react';
import { CardContainer, CardContent } from './styled';
import { ICardProps } from './ICardTrigger';

export const CardTrigger: React.FC<ICardProps> = ({ children }) => {
  return (
    <CardContainer>
      <CardContent>
        <h3>Random Trigger</h3>
        <p>Random info in the trigger window</p>
      </CardContent>
      <span>
        <span>{children ? '1' : '+'}</span>
      </span>
    </CardContainer>
  );
};

