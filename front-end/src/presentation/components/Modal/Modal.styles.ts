import styled from 'styled-components';

export const FooterButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.alabaster};
  margin-top: 3rem;
  padding: 1rem 2rem;
`;

export const FormContainer = styled.div`
  display: grid;
  flex-direction: row;
  gap: 3rem 1rem;
  grid-template-columns: repeat(3, 2fr);
  padding: 2rem;
`;

export const Container = styled.div`
  padding: 2rem;
`;

export const Title = styled.div`
  padding: 1rem;
  text-align: left;
`;
