import { Link, useLocation } from 'react-router-dom';
import { Container } from './Header.styles';
import realLogo from '/SoftExpert.png';

export function Header(): JSX.Element {
  const location = useLocation();

  return (
    <Container>
      <img src={realLogo} />

      <ul>
        <li>Olá, usuário!</li>
        <Link
          to={'/'}
          className={location.pathname === '/' ? 'active-menu' : ''}
        >
          <li>Home</li>
        </Link>
        <Link
          to={'/products'}
          className={location.pathname === '/products' ? 'active-menu' : ''}
        >
          <li>Produtos</li>
        </Link>
        <Link
          to={'/categories'}
          className={location.pathname === '/categories' ? 'active-menu' : ''}
        >
          <li>Categorias</li>
        </Link>
      </ul>
    </Container>
  );
}
