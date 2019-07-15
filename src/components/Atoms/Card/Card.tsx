import * as React from 'react';
import { CardContainer, CardContent } from './styled';
import { ICardProps } from './ICard';

export const Card: React.FC<ICardProps> = ({ children }) => {
  return (
    <CardContainer>
      <CardContent>{children ? children : null}</CardContent>
    </CardContainer>
  );
};

