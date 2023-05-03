import { InputText, Loader, Modal } from '../../../../components';
import { IModalCreateProdCategoryProps } from './ModalCreateProdCategory.types';
import { useModalCreateProdCategory } from './useModalCreateProdCategory';

export function ModalCreateProdCategory({
  isOpen,
  title,
  onClose
}: IModalCreateProdCategoryProps): JSX.Element {
  const { control, onSubmit, isLoading, errors } = useModalCreateProdCategory();
  return (
    <Modal
      isOpen={isOpen}
      title={title}
      onClose={onClose}
      onSubmit={onSubmit()}
    >
      <Loader isLoading={isLoading} />
      <InputText
        control={control}
        name='name'
        placeholder='Nome Categoria'
        showLabelAbove={false}
        errorMessage={errors.name?.message}
      />
    </Modal>
  );
}
