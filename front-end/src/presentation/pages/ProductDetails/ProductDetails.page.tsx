import { ActionButtons, InputText, Loader, Select } from '../../components';
import {
  Card,
  CardContainer,
  Container,
  FormFields,
  Wrapper
} from './ProductDetails.styles';
import { useProductDetailsPage } from './useProductDetailsPage';
import { RiHome4Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export function ProductDetailsPage(): JSX.Element {
  const {
    data,
    isLoading,
    control,
    errors,
    editActionButtons,
    sendFormActionButtons,
    disabled,
    selectCategoriesOptions
  } = useProductDetailsPage();

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
                  maxLength={100}
                  errorMessage={errors?.name?.message as string}
                />

                <Select
                  control={control}
                  placeholder='Categoria'
                  name='categoryId'
                  options={selectCategoriesOptions}
                  disabled={disabled}
                  errorMessage={errors?.categoryId?.message as string}
                />

                <InputText
                  disabled={disabled}
                  control={control}
                  name='description'
                  placeholder='Descrição'
                  errorMessage={errors?.description?.message as string}
                />

                <InputText
                  disabled={disabled}
                  control={control}
                  name='price'
                  placeholder='Preço em R$'
                  errorMessage={errors?.price?.message as string}
                />

                <InputText
                  disabled={disabled}
                  control={control}
                  name='tax'
                  placeholder='Taxa de impostos em %'
                  errorMessage={errors?.tax?.message as string}
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
