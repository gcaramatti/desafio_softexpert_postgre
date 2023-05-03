import { ICreateProductForm } from '../../services/product/productService.types';
import ProductService from '../../services/product/product.service';

export const createProductMutation = {
  key: ['createProduct'],
  mutation: async (payload: ICreateProductForm): Promise<null> => {
    return await ProductService.createProduct(payload);
  }
};
