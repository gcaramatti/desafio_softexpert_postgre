import { ActionButtons, Loader } from '../../components';
import { IButtonProps } from '../../components/Button/Button.types';
import { Card, CardWrapper, Container } from './Home.styles';
import {
  RiMoneyDollarCircleLine,
  RiShoppingCart2Line,
  RiPriceTag3Line,
  RiEye2Line
} from 'react-icons/ri';
import { useHomePage } from './useHomePage';
import {
  ModalCreateProdCategory,
  ModalCreateProduct,
  ModalSellProducts
} from './components';
import { Format, Mask } from '../../../shared/utils';
import { useNavigate } from 'react-router-dom';

export function HomePage(): JSX.Element {
  const { setModalOpen, modalOpen, isLoading, allSales, refetch, allProducts } =
    useHomePage();

  const navigate = useNavigate();

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
        refetchProductQuery={refetch.refetchProductsQuery}
      />

      <ModalCreateProdCategory
        isOpen={modalOpen === 'newCategory'}
        title='Cadastrar Categoria'
        onClose={() => setModalOpen('closed')}
        refetchCatQuery={refetch.refetchCatQuery}
      />

      <ModalSellProducts
        isOpen={modalOpen === 'sell'}
        title='Realizar Venda'
        onClose={() => setModalOpen('closed')}
        refetchSalesQuery={refetch.refetchSalesQuery}
        allProducts={allProducts}
      />

      <CardWrapper>
        {allSales !== undefined ? (
          allSales.map((value, index) => (
            <Card key={index}>
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

              <ActionButtons
                actionButtonsArray={[
                  {
                    children: 'Detalhes',
                    icon: <RiEye2Line />,
                    type: 'button',
                    onClick: () => navigate(`/sale/${value.id}`)
                  }
                ]}
              />
            </Card>
          ))
        ) : (
          <Card>Nenhuma venda encontrada</Card>
        )}
      </CardWrapper>
    </Container>
  );
}
