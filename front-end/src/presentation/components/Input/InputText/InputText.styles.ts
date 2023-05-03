import styled from 'styled-components';
import {
  IInputTextStylesType,
  ILabelInputTextStyleTyle
} from './InputText.types';

export const Container = styled.div<IInputTextStylesType>`
  width: 100%;
  display: flex;
  align-items: ${({ icon }) => (icon ? 'center' : 'flex-start')};
  flex-direction: ${({ icon }) => (icon ? 'row' : 'column')};
  gap: 1rem;

  > label {
    margin: 0;
  }

  > span {
    font-size: 1.6rem;
  }
`;

export const StyledInput = styled.input`
  padding: 2.3rem 0.5rem 1rem 0.5rem;
  border: 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.secondary};
  background: transparent;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  &:disabled {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.disabled};
  }
`;

export const ErrorMessage = styled.label`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.danger};
  margin: 0;
  padding: 0;
`;

export const IconWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > label {
    margin: 0;
  }

  > span {
    font-size: 1.6rem;
  }
`;

export const InputLabel = styled.label<ILabelInputTextStyleTyle>`
  position: absolute;
  padding: 1rem 0;
  pointer-events: none;
  transition: 0.5s;
  top: -1.4rem;
  left: 0;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabled : theme.colors.secondary};
  font-size: 1.4rem;
`;
