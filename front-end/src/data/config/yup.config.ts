import * as yup from 'yup';

yup.setLocale({
  mixed: {
    required: 'Este campo é obrigatório'
  },
  string: {
    matches: 'O valor inserido é inválido'
  }
});

export default yup;
