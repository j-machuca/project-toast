import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../App";

function ToastShelf() {
  const { toasts, dismissToast } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, idx) => {
        return (
          <li key={idx} className={styles.toastWrapper}>
            <Toast
              variant={toast.variant}
              message={toast.message}
              onDissmissHandler={() => dismissToast(toast.id)}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
