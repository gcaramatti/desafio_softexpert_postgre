import SaleService from '../../services/sale/sale.service';
import { ISaleSummary } from '../../services/sale/saleService.types';

export const getSalesSummaryQuery = {
  key: ['getSalesSummary'],
  query: async (): Promise<ISaleSummary[]> => {
    return await SaleService.getSalesSummary();
  }
};
