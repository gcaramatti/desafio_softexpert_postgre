import api from '../api';
import SaleMapper from './mapper/Sale.mapper';
import {
  IPersistenceSaleSummary,
  ISale,
  ISaleSummary
} from './saleService.types';

class SaleService {
  async createSale(payload: ISale[]): Promise<void> {
    const { data } = await api.post(
      '/sales',
      payload.map(value => SaleMapper.toPersistence(value))
    );

    // return data;
  }

  async getSalesSummary(): Promise<ISaleSummary[]> {
    const { data } = await api.get('/sales');

    return data.data.map((value: IPersistenceSaleSummary) =>
      SaleMapper.toDomain(value)
    );
  }
}

export default new SaleService();
