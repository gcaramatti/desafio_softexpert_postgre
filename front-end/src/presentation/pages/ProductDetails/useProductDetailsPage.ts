import { useQuery } from 'react-query';
import { getProductsByIdQuery } from '../../../data/queries/product/product.queries';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { IButtonProps } from '../../components/Button/Button.types';
import { Mask } from '../../../shared/utils';

export function useProductDetailsPage() {
  const [disabled, setDisabled] = useState(true);
  const { id } = useParams();
  const { control, setValue } = useForm();

  const { data, isLoading: isLoadingProductsQuery } = useQuery(
    getProductsByIdQuery.key,
    async () => {
      if (id) return await getProductsByIdQuery.query(parseInt(id));
    },
    {
      onSuccess: data => {
        setValue('name', data?.name);
        setValue('description', data?.description);
        setValue('price', Mask.apply('money', String(data?.price)));
        setValue('tax', data?.tax);
        setValue('categoryId', String(data?.categoryId));
      },
      onError: () => {
        toast.error('Erro ao recuperar lista de produtos');
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
      onClick: () => setDisabled(!disabled)
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

  return {
    data,
    isLoading: isLoadingProductsQuery,
    control,
    editActionButtons,
    sendFormActionButtons,
    disabled,
    selectCategoriesOptions
  };
}
