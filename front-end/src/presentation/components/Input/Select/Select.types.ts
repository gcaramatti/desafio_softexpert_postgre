import { Control } from 'react-hook-form';

export interface ISelectProps {
  name: string;
  placeholder: string;
  control: Control<any>;
  disabled?: boolean;
  options: { label: string; value: string | number }[];
  errorMessage?: string;
  onBlur?: () => void;
}

export interface ISelectOption {
  value: string;
  label: string;
}
