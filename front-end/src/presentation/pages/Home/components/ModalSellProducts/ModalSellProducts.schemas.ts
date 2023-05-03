import yup from '../../../../../data/config/yup.config';

export const SellProductsFormSchema = yup.object({
  selledItems: yup.array().of(
    yup.object({
      productId: yup.string().required(),
      quantity: yup.string().required(),
      price: yup.string().required(),
      tax: yup.string().required(),
      totalTax: yup.string().required(),
      totalProduct: yup.string().required()
    })
  )
});
