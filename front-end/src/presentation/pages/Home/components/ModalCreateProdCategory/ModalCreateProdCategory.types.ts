import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters
} from 'react-query';
import { ICategory } from '../../../../../data/services/category/categoryService.types';

export interface IModalCreateProdCategoryProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  refetchCatQuery: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<ICategory[], unknown>>;
}

export interface IUseModalCreateProdCategoryParams {
  refetchCatQuery: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<ICategory[], unknown>>;
  onClose: () => void;
}
