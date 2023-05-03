import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgb(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: wait;

  p {
    margin-top: 0.5rem;
    font-size: 2.1rem;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const StyledSpinner = styled.div`
  border: 0.3rem solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  border-top: 0.3rem solid transparent;
  width: 3.2rem;
  height: 3.2rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
