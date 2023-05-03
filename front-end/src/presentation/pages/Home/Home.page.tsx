import { ActionButtons, Loader } from '../../components';
import { IButtonProps } from '../../components/Button/Button.types';
import { Card, CardWrapper, Container } from './Home.styles';
import {
  RiMoneyDollarCircleLine,
  RiShoppingCart2Line,
  RiPriceTag3Line
} from 'react-icons/ri';
import { useHomePage } from './useHomePage';
import {
  ModalCreateProdCategory,
  ModalCreateProduct,
  ModalSellProducts
} from './components';
import { Format, Mask } from '../../../shared/utils';

export function HomePage(): JSX.Element {
  const { setModalOpen, modalOpen, isLoading, allSales } = useHomePage();

  const actionButtons: IButtonProps[] = [
    {
      children: 'Cadastrar Produto',
      icon: <RiShoppingCart2Line />,
      type: 'button',
      onClick: () => setModalOpen('newProduct')
    },
    {
      children: 'Cadastrar Categoria',
      icon: <RiPriceTag3Line />,
      type: 'button',
      onClick: () => setModalOpen('newCategory')
    },
    {
      children: 'Realizar venda',
      icon: <RiMoneyDollarCircleLine />,
      type: 'button',
      onClick: () => setModalOpen('sell')
    }
  ];

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <ActionButtons actionButtonsArray={actionButtons} />

      <ModalCreateProduct
        isOpen={modalOpen === 'newProduct'}
        title='Novo Produto'
        onClose={() => setModalOpen('closed')}
      />

      <ModalCreateProdCategory
        isOpen={modalOpen === 'newCategory'}
        title='Cadastrar Categoria'
        onClose={() => setModalOpen('closed')}
      />

      <ModalSellProducts
        isOpen={modalOpen === 'sell'}
        title='Realizar Venda'
        onClose={() => setModalOpen('closed')}
      />

      <CardWrapper>
        {allSales ? (
          allSales.map(value => (
            <Card>
              <h2>Venda {value.id}</h2>

              <p>
                Total da taxa de impostos: R$
                {Mask.apply('money', String(value.totalTaxSale))}
              </p>
              <p>
                Total da venda: R$
                {Mask.apply('money', String(value.totalSale))}
              </p>
              <p>
                <b>Total de itens vendidos:</b> {value.totalItems}
              </p>
              <p>
                <b>Realizada em:</b> {Format.formatDate(value.createdAt)}
              </p>
            </Card>
          ))
        ) : (
          <Card>Nenhuma venda encontrada</Card>
        )}
      </CardWrapper>
    </Container>
  );
}
