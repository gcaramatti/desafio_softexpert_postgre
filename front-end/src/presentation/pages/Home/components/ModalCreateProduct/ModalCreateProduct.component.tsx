import { InputText, Modal, Select } from '../../../../components';
import { IModalCreateProductProps } from './ModalCreateProduct.types';
import { useModalCreateProduct } from './useModalCreateProduct';

export function ModalCreateProduct({
  isOpen,
  title,
  onClose
}: IModalCreateProductProps): JSX.Element {
  const { control, errors, onSubmit, selectCategoriesOptions } =
    useModalCreateProduct();
  return (
    <Modal
      isOpen={isOpen}
      title={title}
      onClose={onClose}
      onSubmit={onSubmit()}
    >
      <InputText
        control={control}
        name='name'
        placeholder='Nome'
        errorMessage={errors.name?.message as string}
      />

      <Select
        control={control}
        placeholder='Categoria'
        name='categoryId'
        options={selectCategoriesOptions}
        errorMessage={errors.categoryId?.message}
      />

      <InputText
        control={control}
        name='description'
        placeholder='Descrição'
        errorMessage={errors.name?.message as string}
      />

      <InputText
        control={control}
        name='price'
        placeholder='Preço em R$'
        mask='currency'
        errorMessage={errors.name?.message as string}
      />

      <InputText
        control={control}
        name='tax'
        placeholder='Taxa em %'
        mask='percentage'
        errorMessage={errors.name?.message as string}
      />
    </Modal>
  );
}
