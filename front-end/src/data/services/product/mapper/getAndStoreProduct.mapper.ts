import { Format } from '../../../../shared/utils';
import {
  ICreateProductForm,
  IPersistenceProduct,
  IPersistenceStoreProductType,
  IProduct
} from '../productService.types';

class GetAndStoreProductMapper {
  toDomain(persistenceData: IPersistenceProduct): IProduct {
    return {
      id: persistenceData.id,
      name: persistenceData.name,
      description: persistenceData.description,
      price: persistenceData.price,
      tax: persistenceData.tax,
      categoryId: persistenceData.category_id,
      categoryName: persistenceData.category_name
    };
  }
  toPersistence(formData: ICreateProductForm): IPersistenceStoreProductType {
    return {
      name: formData.name,
      description: formData.description,
      price: Format.parseToFloat(formData.price),
      tax: parseFloat(formData.tax),
      category_id: Format.stringToInteger(formData.categoryId)
    };
  }
}

export default new GetAndStoreProductMapper();
