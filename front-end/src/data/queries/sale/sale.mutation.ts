import SaleService from '../../services/sale/sale.service';
import { ISale } from '../../services/sale/saleService.types';

export const createSaleMutation = {
  key: ['createSale'],
  mutation: async (payload: ISale[]): Promise<any> => {
    return await SaleService.createSale(payload);
  }
};
