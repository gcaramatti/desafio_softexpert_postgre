import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getAllCategoriesQuery } from '../../../data/queries/category/category.queries';
import { deleteCategoryMutation } from '../../../data/queries/category/category.mutations';
import { confirmAlert } from 'react-confirm-alert';

export function useCategoriesPage() {
  const {
    data,
    isLoading: isLoadingCategoriesQuery,
    refetch
  } = useQuery(getAllCategoriesQuery.key, getAllCategoriesQuery.query, {
    onError: () => {
      toast.error('Erro ao recuperar listagem de categorias');
    }
  });

  const mutation = useMutation(
    deleteCategoryMutation.key,
    async (id: number) => {
      return await deleteCategoryMutation.mutation(id);
    },
    {
      onSuccess: () => {
        refetch();
        toast.success('Categoria apagada com sucesso');
      },
      onError: () => {
        toast.error('Erro ao apagar categoria');
      }
    }
  );

  function deleteCategory(id: number) {
    return () =>
      confirmAlert({
        title: 'Apagar categoria?',
        message: 'Essa ação não poderá ser desfeita!',
        closeOnClickOutside: true,
        buttons: [
          {
            label: 'Confirmar',
            className: 'confirm_delete',
            onClick: () => mutation.mutate(id)
          },
          {
            className: 'cancel_delete',
            label: 'Cancelar'
          }
        ]
      });
  }

  return { data, isLoading: isLoadingCategoriesQuery, deleteCategory };
}
