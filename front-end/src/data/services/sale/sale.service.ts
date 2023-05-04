import api from '../api';
import SaleMapper from './mapper/Sale.mapper';
import SaleDetailsMapper from './mapper/SaleDetails.mapper';
import {
  IPersistenceSaleDetails,
  IPersistenceSaleSummary,
  ISale,
  ISaleDetails,
  ISaleSummary
} from './saleService.types';

class SaleService {
  async createSale(payload: ISale[]): Promise<null> {
    const { data } = await api.post(
      '/sales',
      payload.map(value => SaleMapper.toPersistence(value))
    );

    return data;
  }

  async getSalesSummary(): Promise<ISaleSummary[]> {
    const { data } = await api.get('/sales');

    return data.data.map((value: IPersistenceSaleSummary) =>
      SaleMapper.toDomain(value)
    );
  }

  async getSaleDetailById(id: number): Promise<ISaleDetails[]> {
    const { data } = await api.get(`/sales/${id}`);

    return data.data.map((value: IPersistenceSaleDetails) =>
      SaleDetailsMapper.toDomain(value)
    );
  }
}

export default new SaleService();
