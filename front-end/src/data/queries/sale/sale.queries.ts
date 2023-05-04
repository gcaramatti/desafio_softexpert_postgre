import SaleService from '../../services/sale/sale.service';
import {
  ISaleDetails,
  ISaleSummary
} from '../../services/sale/saleService.types';

export const getSalesSummaryQuery = {
  key: ['getSalesSummary'],
  query: async (): Promise<ISaleSummary[]> => {
    return await SaleService.getSalesSummary();
  }
};

export const getSaleDetailByIdQuery = {
  key: ['getSaleDetails'],
  query: async (id: number): Promise<ISaleDetails[]> => {
    return await SaleService.getSaleDetailById(id);
  }
};
