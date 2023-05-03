import yup from '../../../../../data/config/yup.config';

export const ModalCreateProdCategorySchema = yup.object().shape({
  name: yup.string().required()
});
