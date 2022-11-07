import React, { Fragment } from "react";

import styles from "./styles/ProductCard.module.css";
import withNavigate from "../../helpers/withNavigate";
import iconEdit from "../../assets/img/profile/edit-icon.png";
const ProductCard = ({ navigate, id, productName, price, image, display }) => {
  return (
    <Fragment>
      <div
        className={styles["product-card"]}
        onClick={() => {
          navigate(`/products/${id}`);
        }}
      >
        <img src={`${image}`} alt="" className={styles["product-img"]} />
        <p className={styles["product-name"]}>{productName}</p>
        <p className={styles["product-price"]}>{price}</p>
        <div className={`${styles["edit-icon-container"]} ${styles[display]}`}>
          <img src={iconEdit} alt="pen" />
        </div>
      </div>
    </Fragment>
  );
};

export default withNavigate(ProductCard);
