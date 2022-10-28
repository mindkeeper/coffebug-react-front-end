import React from "react";
import styles from "./styles/PromoCard.module.css";
import mothers from "../../assets/img/products/mothers.png";
const PromoCard = () => {
  return (
    <div
      class={`col-12 ${styles["promo-card"]} row align-items-center ${styles["green"]}`}
    >
      <div class={`col-4 ${styles["promo-img"]}`}>
        <img src={mothers} alt="" />
      </div>
      <div class={`col-8 ${styles["promo-desc-container"]}`}>
        <p class={styles["promo-name"]}>HAPPY MOTHER’S DAY!</p>
        <p class={styles["promo-desc"]}>
          Get one of our favorite menu for free!
        </p>
      </div>
    </div>
  );
};
export default PromoCard;
