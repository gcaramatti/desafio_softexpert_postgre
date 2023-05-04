import {
  RefetchOptions,
  RefetchQueryFilters,
  QueryObserverResult
} from 'react-query';
import { IProduct } from '../../../../../data/services/product/productService.types';

export interface IModalCreateProductProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  refetchProductQuery: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<IProduct[], unknown>>;
}

export interface IUseModalCreateProductParams {
  refetchProductQuery: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<IProduct[], unknown>>;
  onClose: () => void;
}
