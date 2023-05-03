import CategoryService from '../../services/category/category.service';
import { ICategory } from '../../services/category/categoryService.types';

export const getAllCategoriesQuery = {
  key: ['getAllCompanies'],
  query: async (): Promise<ICategory[]> => await CategoryService.categoryList()
};
