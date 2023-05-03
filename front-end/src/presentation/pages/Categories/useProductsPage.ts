import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getAllCategoriesQuery } from '../../../data/queries/category/category.queries';
import { deleteCategoryMutation } from '../../../data/queries/category/category.mutations';

export function useProductsPage() {
  const {
    data,
    isLoading: isLoadingCategoriesQuery,
    refetch
  } = useQuery(getAllCategoriesQuery.key, getAllCategoriesQuery.query, {
    onSuccess: data => {},
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
        toast.success('Produto apagado com sucesso');
      }
    }
  );

  function deleteCategory(id: number) {
    mutation.mutate(id);
  }

  return { data, isLoading: isLoadingCategoriesQuery, deleteCategory };
}
