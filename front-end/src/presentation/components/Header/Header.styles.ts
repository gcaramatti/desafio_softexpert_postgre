import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  height: 6.5rem;
  width: 100%;
  padding: 2.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between !important;
  z-index: 10;

  > ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  > ul > li {
    color: ${({ theme }) => theme.colors.white};
  }

  > img {
    max-width: 18rem;
  }
`;

export const ActionButtonsWrapper = styled.div`
  width: 100%;
`;
