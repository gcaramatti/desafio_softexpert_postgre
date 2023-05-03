import { type ToastPosition } from 'react-toastify';

export interface IToastContainerProps {
  duration?: number;
  position?: ToastPosition;
  hideProgressBar?: boolean;
}
