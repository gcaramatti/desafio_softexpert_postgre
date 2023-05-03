import styled from 'styled-components';
import { ButtonStylesType } from './Button.types';

export const Container = styled.button<ButtonStylesType>`
  background-color: ${({ theme, customButton }) =>
    customButton?.backgroundColor
      ? theme.colors[customButton.backgroundColor]
      : theme.colors.secondary};
  color: ${({ theme, customButton }) =>
    customButton?.color
      ? theme.colors[customButton.color]
      : theme.colors.white};
  padding: 0.8rem 1.6rem;
  font-weight: 500;
  border: 0;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  gap: 0.5rem;
  transition: 0.3s;

  > svg {
    font-size: 1.8rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;
