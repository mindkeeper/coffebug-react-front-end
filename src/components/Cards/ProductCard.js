import React, { Fragment } from "react";

import styles from "./styles/ProductCard.module.css";
import withNavigate from "../../helpers/withNavigate";

const ProductCard = ({ navigate, id, productName, price, image }) => {
  return (
    <Fragment>
      <div
        className={styles["product-card"]}
        onClick={() => {
          navigate(`/products/${id}`);
        }}
      >
        <img
          src={`http://localhost:8080/${image}`}
          alt=""
          className={styles["product-img"]}
        />
        <p className={styles["product-name"]}>{productName}</p>
        <p className={styles["product-price"]}>{price}</p>
      </div>
    </Fragment>
  );
};

export default withNavigate(ProductCard);
