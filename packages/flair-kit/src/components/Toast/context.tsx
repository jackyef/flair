import { createContext, useState } from 'react';

import { MappedColorVariant } from '../../utils/getColorMapping';
import { Toast } from './Toast';
import { ToastContainer } from './ToastContainer';

export type Toast = {
  id: string;
  title?: string;
  description?: string;
  icon?: JSX.Element;
  variant?: MappedColorVariant;
};

type ToastContext = {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => Toast['id'];
  removeToast: (toastId: Toast['id']) => void;
};

export const ToastContext = createContext<ToastContext>({
  toasts: [],
  addToast: () => '',
  removeToast: () => {},
});

let counter = 0;

export const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast: ToastContext['addToast'] = (toastData) => {
    const newId = String(counter++);

    setToasts((prev) => [
      ...prev,
      {
        id: newId,
        ...toastData,
      },
    ]);

    return newId;
  };

  const removeToast: ToastContext['removeToast'] = (toastId) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
  };

  console.log({ toasts });

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
      <ToastContainer>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onDismiss={() => {
              removeToast(toast.id);
            }}
          />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};
