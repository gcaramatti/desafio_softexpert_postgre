import { RiCloseCircleLine } from 'react-icons/ri';
import {
  ActionButtons,
  Button,
  InputText,
  Modal,
  Select
} from '../../../../components';
import {
  AddFormWrapper,
  FormContainer,
  FormIndexIdentifier,
  FormWrapper
} from './ModalSellProducts.styles';
import { IModalSellProductsProps } from './ModalSellProducts.types';
import { useModalSellProducts } from './useModalSellProducts';
import { FooterButtons } from '../../../../components/Modal/Modal.styles';
import { IButtonProps } from '../../../../components/Button/Button.types';

export function ModalSellProducts({
  isOpen,
  title,
  onClose
}: IModalSellProductsProps): JSX.Element {
  const {
    fields,
    control,
    addSellItemsForm,
    removeSellItemsForm,
    onSubmit,
    onBlurProductField,
    onBlurQuantityField,
    selectProdOptions,
    errors
  } = useModalSellProducts();

  const actionButtons: IButtonProps[] = [
    {
      children: 'Salvar',
      type: 'submit'
    },
    {
      children: 'Fechar',
      type: 'button',
      customButton: { backgroundColor: 'danger', color: 'white' },
      onClick: () => onClose()
    }
  ];

  return (
    <Modal
      isOpen={isOpen}
      title={title}
      onClose={onClose}
      onSubmit={onSubmit()}
      customForm
      contentAboveForm={
        <AddFormWrapper>
          <Button onClick={addSellItemsForm}>Adicionar item</Button>
        </AddFormWrapper>
      }
    >
      <>
        {fields.map((value, index) => (
          <FormWrapper key={index}>
            {index > 0 && (
              <FormIndexIdentifier>
                <h3>Item {index + 1}</h3>
                <Button
                  type='button'
                  onClick={() => removeSellItemsForm(index)}
                  icon={<RiCloseCircleLine />}
                  customButton={{ backgroundColor: 'danger', color: 'white' }}
                >
                  Excluir item
                </Button>
              </FormIndexIdentifier>
            )}

            <FormContainer>
              <Select
                name={`selledItems.${index}.productId`}
                control={control}
                placeholder='Produto'
                options={selectProdOptions}
                onBlur={() => onBlurProductField(index)}
                errorMessage={errors.selledItems?.[index]?.productId?.message}
              />

              <InputText
                control={control}
                name={`selledItems.${index}.quantity`}
                placeholder='Quantidade'
                onBlur={() => onBlurQuantityField(index)}
                errorMessage={errors.selledItems?.[index]?.quantity?.message}
              />

              <InputText
                control={control}
                name={`selledItems.${index}.price`}
                placeholder='Preço por un. em R$'
                mask='currency'
                errorMessage={errors.selledItems?.[index]?.price?.message}
                disabled
              />

              <InputText
                control={control}
                name={`selledItems.${index}.tax`}
                placeholder='Valor dos impostos em %'
                errorMessage={errors.selledItems?.[index]?.tax?.message}
                disabled
              />

              <InputText
                control={control}
                name={`selledItems.${index}.totalTax`}
                placeholder='Total em impostos R$:'
                errorMessage={errors.selledItems?.[index]?.totalTax?.message}
                disabled
              />

              <InputText
                control={control}
                name={`selledItems.${index}.totalProduct`}
                placeholder='Total produtos R$:'
                errorMessage={
                  errors.selledItems?.[index]?.totalProduct?.message
                }
                disabled
              />
            </FormContainer>
          </FormWrapper>
        ))}
        <FooterButtons>
          <ActionButtons actionButtonsArray={actionButtons} />
        </FooterButtons>
      </>
    </Modal>
  );
}
