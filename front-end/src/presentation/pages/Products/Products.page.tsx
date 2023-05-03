import { ActionButtons, Loader } from '../../components';
import { Card, CardContainer, Container } from './Products.styles';
import { useProductsPage } from './useProductsPage';
import { Mask } from '../../../shared/utils';
import { RiDeleteBin6Line, RiEye2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export function ProductsPage(): JSX.Element {
  const { data, isLoading, deleteProduct } = useProductsPage();

  const navigate = useNavigate();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {data && data.length > 0 ? (
        <CardContainer>
          {data.map((value, index) => (
            <Card key={index}>
              <h2>{value.name}</h2>
              <p>
                <b>Categoria:</b> {value.categoryName}
              </p>
              <p>
                <b>Descrição:</b> {value.description}
              </p>
              <p>
                <b>Preço:</b>R$
                {Mask.apply('money', String(value.price))}
              </p>
              <p>
                <b>Porcentagem de impostos:</b>
                {value.tax}%
              </p>
              <ActionButtons
                actionButtonsArray={[
                  {
                    children: 'Detalhes',
                    icon: <RiEye2Line />,
                    type: 'button',
                    onClick: () => navigate(`/products/${value.id}`)
                  },
                  {
                    children: 'Apagar',
                    icon: <RiDeleteBin6Line />,
                    customButton: { backgroundColor: 'danger', color: 'white' },
                    type: 'button',
                    onClick: deleteProduct(value.id)
                  }
                ]}
              />
            </Card>
          ))}
        </CardContainer>
      ) : (
        <Card>Nenhum produto encontrado</Card>
      )}
    </Container>
  );
}
