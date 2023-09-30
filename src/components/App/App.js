import React from "react";

import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
import ToastShelf from "../ToastShelf/ToastShelf";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastContextProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  function addToast(message, variant) {
    const newToasts = [...toasts, { id: Date.now(), message, variant }];
    setToasts(newToasts);
  }

  function dismissToast(toastId) {
    const newToasts = [...toasts.filter((toast) => toastId !== toast.id)];
    setToasts(newToasts);
  }

  const value = { toasts, addToast, dismissToast };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

function App() {
  return (
    <ToastContextProvider>
      <ToastPlayground />
      <ToastShelf />
      <Footer />
    </ToastContextProvider>
  );
}

export default App;
