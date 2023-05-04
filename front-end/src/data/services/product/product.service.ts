import api from '../api';
import GetAndStoreProductMapper from './mapper/getAndStoreProduct.mapper';
import {
  ICreateProductForm,
  IPersistenceProduct,
  IProduct,
  IUpdateProductForm
} from './productService.types';

class ProductService {
  async createProduct(payload: ICreateProductForm): Promise<null> {
    const { data } = await api.post(
      '/products',
      GetAndStoreProductMapper.toPersistence(payload)
    );

    return data;
  }

  async updateProduct(payload: IUpdateProductForm): Promise<null> {
    const { data } = await api.put(
      `/products/${payload.id}`,
      GetAndStoreProductMapper.toPersistence(payload.data)
    );

    return data;
  }

  async getAllProducts(): Promise<IProduct[]> {
    const { data } = await api.get('/products');

    return data.data.map((value: IPersistenceProduct) =>
      GetAndStoreProductMapper.toDomain(value)
    );
  }

  async getProductById(id: number): Promise<IProduct> {
    const { data } = await api.get(`/products/${id}`);

    return GetAndStoreProductMapper.toDomain(data.data);
  }

  async deleteProduct(id: number): Promise<null> {
    const { data } = await api.delete(`/products/${id}`);

    return data;
  }
}

export default new ProductService();
