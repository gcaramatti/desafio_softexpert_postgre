import yup from '../../../../../data/config/yup.config';

export const ModalCreateProductSchema = yup.object().shape({
  name: yup.string().required('Esse campo é obrigatório'),
  description: yup.string().required('Esse campo é obrigatório'),
  price: yup.string().required('Esse campo é obrigatório'),
  tax: yup.string().required('Esse campo é obrigatório'),
  categoryId: yup.string().required('Esse campo é obrigatório')
});
