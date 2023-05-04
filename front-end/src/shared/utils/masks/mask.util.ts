import { MaskType } from './maskUtil.types';

class Mask {
  apply(mask?: MaskType, value?: string | null): string {
    if (!value || value === null) {
      return '';
    }

    switch (mask) {
      case 'currency':
        return value
          .toString()
          .replace(/\D/g, '')
          .replace(/(\d)(\d{2})$/, '$1,$2')
          .replace(/(?=(\d{3})+(\D))\B/g, '.');

      case 'percentage':
        return value
          .toString()
          .replace(/\D/g, '')
          .replace(/(\d)(\d{2})$/, '$1.$2');

      case 'money':
        return parseFloat(value).toFixed(2).toString().replace('.', ',');

      default:
        return value;
    }
  }

  remove(value: string): string {
    if (!value) return '';

    return value.toString().replace(/\D/g, '');
  }
}

export default new Mask();
