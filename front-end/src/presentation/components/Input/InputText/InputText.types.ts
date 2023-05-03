import { InputHTMLAttributes, ReactNode } from 'react';
import { type Control, type FieldValues } from 'react-hook-form';
import { MaskType } from '../../../../shared/utils/masks/maskUtil.types';

export interface IInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<T>;
  defaultValue?: string;
  mask?: MaskType;
  type?: 'text' | 'password';
  placeholder: string;
  errorMessage?: string;
  icon?: ReactNode;
  disabled?: boolean;
  showLabelAbove?: boolean;
}

export type IInputTextStylesType = Pick<IInputProps<FieldValues>, 'icon'>;

export type ILabelInputTextStyleTyle = Pick<
  IInputProps<FieldValues>,
  'disabled'
>;
