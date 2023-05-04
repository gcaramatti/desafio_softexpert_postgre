import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
`;

export const Table = styled.table`
  background-color: ${({ theme }) => theme.colors.alabaster};
  width: 100%;
  border-collapse: collapse;
  border-radius: 0.8rem;
  border: 0;

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

export const Description = styled.div`
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.alabaster};

  p {
    padding: 1rem 0;
  }
`;
