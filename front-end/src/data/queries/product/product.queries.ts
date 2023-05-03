import ProductService from '../../services/product/product.service';
import { IProduct } from '../../services/product/productService.types';

export const getAllProductsQuery = {
  key: ['getAllProducts'],
  query: async (): Promise<IProduct[]> => await ProductService.getAllProducts()
};

export const getProductsByIdQuery = {
  key: ['getProductsById'],
  query: async (id: number): Promise<IProduct> => {
    return await ProductService.getProductById(id);
  }
};
