import { useQuery } from 'react-query';
import { getAllProductsQuery } from '../../../data/queries/product/product.queries';
import { toast } from 'react-toastify';

export function useProductsPage() {
  const { data, isLoading: isLoadingProductsQuery } = useQuery(
    getAllProductsQuery.key,
    getAllProductsQuery.query,
    {
      onError: () => {
        toast.error('Erro ao recuperar lista de produtos');
      }
    }
  );

  return { data, isLoading: isLoadingProductsQuery };
}
