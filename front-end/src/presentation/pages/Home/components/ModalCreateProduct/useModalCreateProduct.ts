import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ModalCreateProductSchema } from './ModalCreateProduct.schema';
import { useMutation } from 'react-query';
import { createProductMutation } from '../../../../../data/queries/product/product.mutations';
import { ICreateProductForm } from '../../../../../data/services/product/productService.types';
import { toast } from 'react-toastify';

export function useModalCreateProduct() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ICreateProductForm>({
    resolver: yupResolver(ModalCreateProductSchema)
  });

  const mutation = useMutation(
    createProductMutation.key,
    async (payload: ICreateProductForm) => {
      return await createProductMutation.mutation(payload);
    },
    {
      onSuccess: () => {
        toast.success('Produto cadastrado com sucesso');
      }
    }
  );

  function onSubmit() {
    return handleSubmit(data => {
      mutation.mutate(data);
    });
  }

  const selectCategoriesOptions = localStorage.getItem(
    'selectCategoriesOptions'
  )
    ? JSON.parse(localStorage.getItem('selectCategoriesOptions') as string)
    : [];

  return { control, onSubmit, errors, selectCategoriesOptions };
}
