import { useFieldArray, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { Format, Mask } from '../../../../../shared/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { SellProductsFormSchema } from './ModalSellProducts.schemas';
import { createSaleMutation } from '../../../../../data/queries/sale/sale.mutation';
import {
  ISale,
  ISaleHookForm
} from '../../../../../data/services/sale/saleService.types';
import { IUseModalSellProductsParams } from './ModalSellProducts.types';

export function useModalSellProducts({
  refetchSalesQuery,
  allProducts,
  onClose
}: IUseModalSellProductsParams) {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
    clearErrors
  } = useForm<ISaleHookForm>({
    resolver: yupResolver(SellProductsFormSchema),
    defaultValues: {
      selledItems: [
        {
          productId: '',
          quantity: '',
          price: '',
          tax: '',
          totalTax: '',
          totalProduct: ''
        }
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'selledItems'
  });

  const addSellItemsForm = (): void => {
    append({
      productId: '',
      quantity: '',
      price: '',
      tax: '',
      totalTax: '',
      totalProduct: ''
    });
  };

  const removeSellItemsForm = (index: number): void => {
    remove(index);
  };

  const mutation = useMutation(
    createSaleMutation.key,
    async (payload: ISale[]) => {
      return createSaleMutation.mutation(payload);
    },
    {
      onSuccess: () => {
        refetchSalesQuery();
        toast.success('Venda realizada com sucesso!');
        onClose();
      }
    }
  );

  function onSubmit() {
    return handleSubmit(data => {
      reset();
      mutation.mutate(data.selledItems);
    });
  }

  function onBlurProductField(index: number) {
    const selectedProduct = watch(`selledItems.${index}.productId`);
    const product = allProducts?.find(
      value => value.id === parseInt(selectedProduct)
    );
    if (product) {
      clearErrors();

      setValue(`selledItems.${index}.tax`, String(product.tax));
      setValue(
        `selledItems.${index}.price`,
        Mask.apply('money', String(product.price))
      );
    }
  }

  function onBlurQuantityField(index: number) {
    const selectedProduct = watch(`selledItems.${index}.productId`);
    if (!selectedProduct) {
      reset();
      toast.warn('Você deve selecionar um produto!');
    } else {
      const quantity = watch(`selledItems.${index}.quantity`);
      const unitPrice = watch(`selledItems.${index}.price`);
      const taxPercentage = watch(`selledItems.${index}.tax`);

      const sumTotal = parseInt(quantity) * Format.parseToFloat(unitPrice);
      const calcTaxPrice = sumTotal * (parseFloat(taxPercentage) / 100);
      clearErrors();

      setValue(
        `selledItems.${index}.totalProduct`,
        Mask.apply('money', String(sumTotal))
      );
      setValue(
        `selledItems.${index}.totalTax`,
        Mask.apply('money', String(calcTaxPrice))
      );
    }
  }

  const selectProdOptions = localStorage.getItem('selectProductOptions')
    ? JSON.parse(localStorage.getItem('selectProductOptions') as string)
    : [];

  return {
    addSellItemsForm,
    removeSellItemsForm,
    fields,
    control,
    onSubmit,
    isLoading: mutation.isLoading,
    onBlurProductField,
    onBlurQuantityField,
    selectProdOptions,
    errors
  };
}
