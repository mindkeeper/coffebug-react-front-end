import React from "react";

import styles from "./styles/ProductCard.module.css";
import cardImg from "../../assets/img/products/veggie.png";
const ProductCard = () => {
  return (
    <div className={styles["product-card"]}>
      <img src={cardImg} alt="" className={styles["product-img"]} />
      <p className={styles["product-name"]}>Veggie tomato Mix</p>
      <p className={styles["product-price"]}>IDR 34.000</p>
    </div>
  );
};

export default ProductCard;
