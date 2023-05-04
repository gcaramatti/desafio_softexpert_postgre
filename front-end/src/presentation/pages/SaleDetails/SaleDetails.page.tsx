import { useNavigate } from 'react-router-dom';
import { ActionButtons } from '../../components';
import { RiHome4Line } from 'react-icons/ri';
import { Container, Description, Table } from './SaleDetails.style';
import { useSaleDetails } from './useSaleDetails';

export function SaleDetailsPage(): JSX.Element {
  const { data } = useSaleDetails();
  const navigate = useNavigate();

  return (
    <Container>
      <ActionButtons
        actionButtonsArray={[
          {
            children: 'Ir para home',
            icon: <RiHome4Line />,
            type: 'button',
            onClick: () => navigate('/')
          }
        ]}
      />

      {data && (
        <Description>
          <h1>Venda {data[0].saleId}</h1>{' '}
          <p>Realizada em: {data[0].createdAt}</p>
        </Description>
      )}
      <Table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Total de impostos</th>
            <th>Valor total</th>
          </tr>
        </thead>

        <tbody>
          {data ? (
            data.map((value, index) => (
              <tr key={index}>
                <th>{value.productId}</th>
                <th>{value.productName}</th>
                <th>{value.description}</th>
                <th>{value.quantity}</th>
                <th>R$ {value.totalTax}</th>
                <th>R$ {value.totalProduct}</th>
              </tr>
            ))
          ) : (
            <tr>
              <th>Erro ao trazer dados</th>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
