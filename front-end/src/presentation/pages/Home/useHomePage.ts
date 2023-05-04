import { useState } from 'react';
import { IModalOpenType } from './Home.types';
import { useQuery } from 'react-query';
import { getAllCategoriesQuery } from '../../../data/queries/category/category.queries';
import { getSalesSummaryQuery } from '../../../data/queries/sale/sale.queries';
import { getAllProductsQuery } from '../../../data/queries/product/product.queries';

export function useHomePage() {
  const [modalOpen, setModalOpen] = useState<IModalOpenType>('closed');

  const selectCategoriesOptions: { value: string; label: string }[] = [];
  const selectProductOptions: { value: string; label: string }[] = [];

  const {
    data: allCategories,
    isLoading: isLoadingCategoriesQuery,
    refetch: refetchCatQuery
  } = useQuery(getAllCategoriesQuery.key, getAllCategoriesQuery.query, {
    onSuccess: data => {
      if (data) {
        localStorage.removeItem('selectCategoriesOptions');

        data.map(value => {
          selectCategoriesOptions.push({
            value: String(value.id),
            label: value.name
          });
        });

        if (!localStorage.getItem('selectCategoriesOptions'))
          localStorage.setItem(
            'selectCategoriesOptions',
            JSON.stringify(selectCategoriesOptions)
          );
      } else {
        if (!localStorage.getItem('selectCategoriesOptions'))
          localStorage.setItem('selectCategoriesOptions', JSON.stringify([]));
      }
    }
  });

  const {
    data: allSales,
    isLoading: isLoadingSales,
    refetch: refetchSalesQuery
  } = useQuery(getSalesSummaryQuery.key, getSalesSummaryQuery.query);

  const {
    data: allProducts,
    isLoading: isLoadingProductsQuery,
    refetch: refetchProductsQuery
  } = useQuery(getAllProductsQuery.key, getAllProductsQuery.query, {
    onSuccess: data => {
      localStorage.removeItem('selectProductOptions');
      if (data) {
        data.map(value => {
          selectProductOptions.push({
            value: String(value.id),
            label: value.name
          });
        });

        if (!localStorage.getItem('selectProductOptions'))
          localStorage.setItem(
            'selectProductOptions',
            JSON.stringify(selectProductOptions)
          );
      }
    }
  });

  return {
    setModalOpen,
    modalOpen,
    allCategories,
    allProducts,
    isLoading:
      isLoadingCategoriesQuery ?? isLoadingSales ?? isLoadingProductsQuery,
    allSales,
    refetch: {
      refetchSalesQuery,
      refetchCatQuery,
      refetchProductsQuery
    }
  };
}
