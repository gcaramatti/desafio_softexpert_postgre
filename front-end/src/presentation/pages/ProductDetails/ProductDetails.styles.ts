import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  justify-content: center;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.alabaster};
  border: 0;
  border-radius: 0.8rem;
  max-width: 40rem;
  padding: 2rem;
  font-size: 1.3rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    min-width: 40rem;
  }
`;

export const FormFields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem 1rem;
  padding-bottom: 2rem;
`;

export const Wrapper = styled.div`
  width: 90%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.alabaster};
`;
