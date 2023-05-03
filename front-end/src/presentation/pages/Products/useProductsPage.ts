import { useMutation, useQuery } from 'react-query';
import { getAllProductsQuery } from '../../../data/queries/product/product.queries';
import { toast } from 'react-toastify';
import { deleteProductMutation } from '../../../data/queries/product/product.mutations';
import { confirmAlert } from 'react-confirm-alert';

export function useProductsPage() {
  const {
    data,
    isLoading: isLoadingProductsQuery,
    refetch
  } = useQuery(getAllProductsQuery.key, getAllProductsQuery.query, {
    onError: () => {
      toast.warn(
        'Parece que você ainda não cadastrou nenhum produto! Cadastre na home!'
      );
    }
  });

  const mutation = useMutation(
    deleteProductMutation.key,
    async (id: number) => {
      return await deleteProductMutation.mutation(id);
    },
    {
      onSuccess: () => {
        refetch();
        toast.success('Produto apagado com sucesso');
      },
      onError: () => {
        toast.error('Erro ao apagar categoria');
      }
    }
  );

  function deleteProduct(id: number) {
    return () => {
      confirmAlert({
        title: 'Apagar produto?',
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
    };
  }

  return {
    data,
    isLoading: isLoadingProductsQuery ?? mutation.isLoading,
    deleteProduct
  };
}
