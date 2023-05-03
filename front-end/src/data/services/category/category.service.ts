import api from '../api';
import { ICategory, ICreateCategoryPayload } from './categoryService.types';

class CategoryService {
  async categoryList(): Promise<ICategory[]> {
    const { data } = await api.get('/categories');

    return data.data;
  }

  async createCategory(payload: ICreateCategoryPayload): Promise<null> {
    const { data } = await api.post('/categories', payload, {
      headers: {
        'Access-Control-Allow-Methods': '*'
      }
    });

    return data;
  }

  async deleteCategory(id: number): Promise<null> {
    const { data } = await api.delete(`/categories/${id}`);

    return data;
  }
}

export default new CategoryService();
