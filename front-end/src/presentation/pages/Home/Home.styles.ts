import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    min-width: 40rem;
  }
`;

export const Card = styled.div`
  max-width: 50rem;
  min-width: 40rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.alabaster};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.3rem;

  > * {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
