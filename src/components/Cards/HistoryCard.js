import React from "react";
import styles from "./styles/HistoryCard.module.css";
const HistoryCard = ({ productName, price, status, image }) => {
  return (
    <div className={`${styles["card-history"]}`}>
      <div className={`${styles["img-container"]}`}>
        <img src={`${image}`} alt="" />
      </div>
      <div className={`${styles["history-detail"]}`}>
        <p className={styles["product-name"]}>{productName}</p>
        <p className={styles["price"]}>{price}</p>
        <p className={styles["status"]}>{status}</p>
      </div>
      <input type="checkbox" className={styles["checkbox"]} />
    </div>
  );
};
export default HistoryCard;
