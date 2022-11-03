import React, { useEffect, useState } from "react";
import styles from "./Toast.module.css";
function Toast({ display, status, message, changeState }) {
  const [show, setShow] = useState(display);

  return (
    <div
      onClick={() => {
        changeState(false);
      }}
      className={`${styles["container"]} ${styles[display]} ${styles[status]}`}
    >
      <p className={styles["message"]}>{message}</p>
    </div>
  );
}

export default Toast;
