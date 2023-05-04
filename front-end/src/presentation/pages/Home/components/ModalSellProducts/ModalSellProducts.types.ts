import {
  RefetchOptions,
  RefetchQueryFilters,
  QueryObserverResult
} from 'react-query';
import { ISaleSummary } from '../../../../../data/services/sale/saleService.types';
import { IProduct } from '../../../../../data/services/product/productService.types';

export interface IModalSellProductsProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  refetchSalesQuery: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<ISaleSummary[], unknown>>;
  allProducts: IProduct[] | undefined;
}

export interface IUseModalSellProductsParams {
  allProducts: IProduct[] | undefined;
  refetchSalesQuery: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<ISaleSummary[], unknown>>;
  onClose: () => void;
}
