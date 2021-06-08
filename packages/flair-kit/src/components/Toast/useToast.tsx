import { useContext } from 'react';

import { ToastContext } from './context';

export const useToast = () => {
  return useContext(ToastContext);
};
