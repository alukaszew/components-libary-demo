import styled from 'styled-components';
import { IButtonProps } from './IButton';

export const ButtonContainer = styled.button<IButtonProps>`
  background-color: ${(props) => props.color ? props.color : '#efefef'};
  border: 0;
  color: ${(props) => props.color ? 'white' : '#444' };
  cursor: pointer;
  outline: 0;
  padding: .6rem 1.2rem;
  transition: background-color 0.3s, color 0.3s;

  font-size: .8rem;
  font-family: Verdana, sans-serif, Arial;

  &:hover {
    background-color: #fefefe;
    color: #4d4d4d;
  }
`;