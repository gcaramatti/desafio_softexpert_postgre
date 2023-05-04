import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSaleDetailByIdQuery } from '../../../data/queries/sale/sale.queries';

export function useSaleDetails() {
  const { id } = useParams();

  const { data } = useQuery(
    getSaleDetailByIdQuery.key,
    async () => {
      if (id) return await getSaleDetailByIdQuery.query(parseInt(id));
    },
    {
      onError: () => {
        toast.error('Erro ao recuperar dados da venda');
      }
    }
  );

  return { data };
}
