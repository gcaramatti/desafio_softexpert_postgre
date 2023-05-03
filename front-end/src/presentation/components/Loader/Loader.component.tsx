import { Container } from './Loader.styles';
import { StyledSpinner } from './Loader.styles';
import { ILoaderProps } from './Loader.types';

export function Loader({
  isLoading = false
}: ILoaderProps): JSX.Element | null {
  if (!isLoading) {
    return null;
  }

  return (
    <Container>
      <StyledSpinner />

      <p>Carregando</p>
    </Container>
  );
}
