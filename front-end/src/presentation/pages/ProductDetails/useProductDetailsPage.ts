import { useMutation, useQuery } from 'react-query';
import { getProductsByIdQuery } from '../../../data/queries/product/product.queries';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { IButtonProps } from '../../components/Button/Button.types';
import { Mask } from '../../../shared/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateProductSchema } from '../Home/components/ModalCreateProduct/ModalCreateProduct.schema';
import { updateProductMutation } from '../../../data/queries/product/product.mutations';
import {
  ICreateProductForm,
  IUpdateProductForm
} from '../../../data/services/product/productService.types';

export function useProductDetailsPage() {
  const [disabled, setDisabled] = useState(true);
  const { id } = useParams();
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<ICreateProductForm>({
    resolver: yupResolver(CreateProductSchema)
  });

  const { data, isLoading: isLoadingProductsQuery } = useQuery(
    getProductsByIdQuery.key,
    async () => {
      if (id) return await getProductsByIdQuery.query(parseInt(id));
    },
    {
      onSuccess: data => {
        if (data) {
          setValue('name', data.name);
          setValue('description', data.description);
          setValue('price', Mask.apply('money', String(data.price)));
          setValue('tax', String(data.tax));
          setValue('categoryId', String(data.categoryId));
        }
      },
      onError: () => {
        toast.error('Erro ao recuperar dados do produto');
      }
    }
  );

  const editActionButtons: IButtonProps[] = [
    {
      children: 'Editar',
      type: 'button',
      onClick: () => setDisabled(!disabled)
    }
  ];

  const sendFormActionButtons: IButtonProps[] = [
    {
      children: 'Salvar',
      type: 'submit',
      onClick: onSubmit()
    },
    {
      children: 'Cancelar',
      type: 'button',
      customButton: { backgroundColor: 'danger', color: 'white' },
      onClick: () => setDisabled(!disabled)
    }
  ];

  const selectCategoriesOptions = localStorage.getItem(
    'selectCategoriesOptions'
  )
    ? JSON.parse(localStorage.getItem('selectCategoriesOptions') as string)
    : [];

  const mutation = useMutation(
    updateProductMutation.key,
    async (payload: IUpdateProductForm) => {
      return await updateProductMutation.mutation(payload);
    },
    {
      onSuccess: () => {
        setDisabled(true);
        toast.success('Produto Atualizado com sucesso');
      }
    }
  );

  function onSubmit() {
    return handleSubmit(data => {
      const payload: IUpdateProductForm = {
        id: id ? parseInt(id) : 1,
        data: data
      };

      mutation.mutate(payload);
    });
  }

  return {
    data,
    isLoading: isLoadingProductsQuery ?? mutation.isLoading,
    control,
    errors,
    editActionButtons,
    sendFormActionButtons,
    disabled,
    selectCategoriesOptions,
    onSubmit
  };
}
