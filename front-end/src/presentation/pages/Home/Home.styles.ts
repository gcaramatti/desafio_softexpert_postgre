import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  justify-content: center;
  min-width: 40rem;

  @media screen and (min-width: 2000px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (min-width: 1800px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1799px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
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
