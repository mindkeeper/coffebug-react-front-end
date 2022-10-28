import React from "react";
import styles from "./styles/HistoryCard.module.css";
import veggie from "../../assets/img/veggie.png";
const HistoryCard = () => {
  return (
    <div className={`${styles["card-history"]} col-5 col-md-3`}>
      <div className="row">
        <div className={`${styles["img-container"]} col-3`}>
          <img src={veggie} alt="" />
        </div>
        <div className={`${styles["history-detail"]} col-8`}>
          <p className={styles["product-name"]}>Veggie Tomato Mix</p>
          <p className={styles["price"]}>IDR 34.000</p>
          <p className={styles["status"]}>Delivered</p>
          <input type="checkbox" className={styles["checkbox"]} />
        </div>
      </div>
    </div>
  );
};
export default HistoryCard;
