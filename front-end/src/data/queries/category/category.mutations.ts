import CategoryService from '../../services/category/category.service';
import { ICreateCategoryPayload } from '../../services/category/categoryService.types';

export const createCategoryMutation = {
  key: ['createCategory'],
  mutation: async (payload: ICreateCategoryPayload): Promise<null> => {
    return await CategoryService.createCategory(payload);
  }
};

export const deleteCategoryMutation = {
  key: ['deleteCategory'],
  mutation: async (id: number): Promise<null> => {
    return await CategoryService.deleteCategory(id);
  }
};
