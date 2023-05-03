import { ActionButtons, InputText, Loader, Select } from '../../components';
import {
  Card,
  CardContainer,
  Container,
  FormFields,
  Wrapper
} from './ProductDetails.styles';
import { useProductDetailsPage } from './useProductDetailsPage';
import { Mask } from '../../../shared/utils';
import { IButtonProps } from '../../components/Button/Button.types';
import { RiDeleteBin6Line, RiEye2Line } from 'react-icons/ri';

export function ProductDetailsPage(): JSX.Element {
  const {
    data,
    isLoading,
    control,
    editActionButtons,
    sendFormActionButtons,
    disabled,
    selectCategoriesOptions
  } = useProductDetailsPage();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {data ? (
        <CardContainer>
          <Wrapper>
            <h2>Editar produto</h2>
            <ActionButtons actionButtonsArray={editActionButtons} />

            <form>
              <FormFields>
                <InputText
                  disabled={disabled}
                  control={control}
                  name='name'
                  placeholder='Nome'
                />

                <Select
                  control={control}
                  placeholder='Categoria'
                  name='categoryId'
                  options={selectCategoriesOptions}
                  disabled={disabled}
                />

                <InputText
                  disabled={disabled}
                  control={control}
                  name='description'
                  placeholder='Descrição'
                />

                <InputText
                  disabled={disabled}
                  control={control}
                  name='price'
                  placeholder='Preço em R$'
                />

                <InputText
                  disabled={disabled}
                  control={control}
                  name='tax'
                  placeholder='Taxa de impostos em %'
                />
              </FormFields>
              {!disabled ? (
                <ActionButtons actionButtonsArray={sendFormActionButtons} />
              ) : (
                ''
              )}
            </form>
          </Wrapper>
        </CardContainer>
      ) : (
        <Card>Nenhum produto encontrado</Card>
      )}
    </Container>
  );
}

// categoryId: number;
// description: string;
// name: string;
// price: number;
// tax: number;
