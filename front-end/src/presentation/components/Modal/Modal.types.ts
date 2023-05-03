import { ReactNode } from 'react';

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  onSubmit?: () => void;
  title: string;
  contentAboveForm?: ReactNode;
  customForm?: boolean;
}
