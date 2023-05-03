import { useState } from 'react';
import { IModalOpenType } from './Home.types';
import { useQuery } from 'react-query';
import { getAllCategoriesQuery } from '../../../data/queries/category/category.queries';
import { getSalesSummaryQuery } from '../../../data/queries/sale/sale.queries';

export function useHomePage() {
  const [modalOpen, setModalOpen] = useState<IModalOpenType>('closed');

  const selectCategoriesOptions: { value: string; label: string }[] = [];

  const { data: allCategories, isLoading: isLoadingCategoriesQuery } = useQuery(
    getAllCategoriesQuery.key,
    getAllCategoriesQuery.query,
    {
      onSuccess: data => {
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
      }
    }
  );

  const { data: allSales, isLoading: isLoadingSales } = useQuery(
    getSalesSummaryQuery.key,
    getSalesSummaryQuery.query
  );

  return {
    setModalOpen,
    modalOpen,
    allCategories,
    isLoading: isLoadingCategoriesQuery ?? isLoadingSales,
    allSales
  };
}
