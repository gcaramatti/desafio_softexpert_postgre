import { Format, Mask } from '../../../../shared/utils';
import { IPersistenceSaleDetails, ISaleDetails } from '../saleService.types';

class SaleDetailsMapper {
  toDomain(persistenceData: IPersistenceSaleDetails): ISaleDetails {
    return {
      id: persistenceData.id,
      saleId: persistenceData.sale_id,
      quantity: persistenceData.quantity,
      unitPrice: persistenceData.unit_price,
      totalProduct: Mask.apply('money', String(persistenceData.total_product)),
      totalTax: Mask.apply('money', String(persistenceData.total_tax)),
      tax: persistenceData.tax,
      createdAt: Format.formatDate(persistenceData.created_at),
      productName: persistenceData.product_name,
      description: persistenceData.description,
      productId: persistenceData.product_id
    };
  }
}

export default new SaleDetailsMapper();
