import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { createCategoryMutation } from '../../../../../data/queries/category/category.mutations';
import { ICreateCategoryPayload } from '../../../../../data/services/category/categoryService.types';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { ModalCreateProdCategorySchema } from './ModalCreateProdCategory.schema';
import { IUseModalCreateProdCategoryParams } from './ModalCreateProdCategory.types';

export function useModalCreateProdCategory({
  refetchCatQuery,
  onClose
}: IUseModalCreateProdCategoryParams) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ICreateCategoryPayload>({
    resolver: yupResolver(ModalCreateProdCategorySchema)
  });

  const mutation = useMutation(
    createCategoryMutation.key,
    async (payload: ICreateCategoryPayload) => {
      return await createCategoryMutation.mutation(payload);
    },
    {
      onSuccess: () => {
        reset();
        refetchCatQuery();
        toast.success('Categoria cadastrada com sucesso!');
        onClose();
      },
      onError: () => {
        toast.error('Erro ao cadastrar categoria');
      }
    }
  );

  function onSubmit() {
    return handleSubmit(data => {
      mutation.mutate(data);
    });
  }

  return { control, onSubmit, isLoading: mutation.isLoading, errors };
}
