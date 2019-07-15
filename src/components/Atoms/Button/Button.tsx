import * as React from 'react';
import { IButtonProps } from './IButton';
import { ButtonContainer } from './styled';

export const Button: React.FC<IButtonProps> = ({color, children}) => {
  return (
    <ButtonContainer color={color}>
      {children ? children : 'Test'}
    </ButtonContainer>
  );
};

