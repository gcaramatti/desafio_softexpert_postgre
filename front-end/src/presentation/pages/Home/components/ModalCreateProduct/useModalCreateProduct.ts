import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateProductSchema } from './ModalCreateProduct.schema';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useMutation
} from 'react-query';
import { createProductMutation } from '../../../../../data/queries/product/product.mutations';
import {
  ICreateProductForm,
  IProduct
} from '../../../../../data/services/product/productService.types';
import { toast } from 'react-toastify';
import { IUseModalCreateProductParams } from './ModalCreateProduct.types';

export function useModalCreateProduct({
  refetchProductQuery,
  onClose
}: IUseModalCreateProductParams) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ICreateProductForm>({
    resolver: yupResolver(CreateProductSchema)
  });

  const mutation = useMutation(
    createProductMutation.key,
    async (payload: ICreateProductForm) => {
      return await createProductMutation.mutation(payload);
    },
    {
      onSuccess: () => {
        refetchProductQuery();
        reset();
        toast.success('Produto cadastrado com sucesso');
        onClose();
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
