import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    color: ${({ theme }) => theme.colors.danger};
    font-size: 1.3rem;
    padding-top: 1.1rem;
  }
`;
