import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem 1rem;
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
`;

export const Table = styled.table`
  background-color: ${({ theme }) => theme.colors.alabaster};
  width: 100%;
  border-collapse: collapse;

  > thead > tr > th {
    padding: 1rem;
    text-align: left;
    font-size: 1.3rem;
    border: 1px solid black;
  }

  > tbody > tr > th {
    border: 1px solid black;
    padding: 1rem;
    text-align: left;
    font-size: 1.3rem;
  }

  th > div {
    justify-content: flex-start !important;
  }
`;
