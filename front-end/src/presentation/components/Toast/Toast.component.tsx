import { ToastContainer } from 'react-toastify';
import { IToastContainerProps } from './Toast.types';
import 'react-toastify/dist/ReactToastify.css';

export function Toast({
  duration = 5000,
  hideProgressBar = false,
  position = 'top-right'
}: IToastContainerProps): JSX.Element {
  return (
    <ToastContainer
      autoClose={duration}
      position={position}
      hideProgressBar={hideProgressBar}
      closeOnClick={true}
      pauseOnHover
      limit={5}
    />
  );
}
