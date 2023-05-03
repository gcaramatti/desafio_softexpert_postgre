import { Format } from '../../../../shared/utils';
import {
  IPersistenceSale,
  ISale,
  ISaleSummary,
  IPersistenceSaleSummary
} from '../saleService.types';

class SaleMapper {
  toDomain(persistenceData: IPersistenceSaleSummary): ISaleSummary {
    return {
      id: persistenceData.id,
      createdAt: persistenceData.created_at,
      totalSale: persistenceData.total_sale,
      totalTaxSale: persistenceData.total_tax_sale,
      totalItems: persistenceData.total_items
    };
  }

  toPersistence(formData: ISale): IPersistenceSale {
    return {
      product_id: parseInt(formData.productId),
      quantity: parseInt(formData.quantity),
      price: Format.parseToFloat(formData.price),
      tax: Format.stringToInteger(formData.tax),
      total_tax: Format.parseToFloat(formData.totalTax),
      total_product: Format.parseToFloat(formData.totalProduct)
    };
  }
}

export default new SaleMapper();
