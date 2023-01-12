import React, { Fragment } from "react";

import styles from "./styles/ProductCard.module.css";
import iconEdit from "../../assets/img/profile/edit-icon.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProductCard = ({ id, productName, price, image, display, isLoading }) => {
  const navigate = useNavigate();
  const role = useSelector((state) => state.auths.userData.role);
  return isLoading ? (
    <Fragment>
      <div className={styles["product-card-loading"]}>
        <div className={styles["img-loading"]}></div>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className={styles["product-card"]}>
        <img
          onClick={() => {
            navigate(`/product/${id}`);
          }}
          src={`${image}`}
          alt=""
          className={styles["product-img"]}
        />
        <p className={styles["product-name"]}>{productName}</p>
        <p className={styles["product-price"]}>{price}</p>
        {role === "Admin" && (
          <div
            onClick={() => {
              navigate(`/product/${id}/edit`);
            }}
            className={`${styles["edit-icon-container"]} ${styles[display]}`}
          >
            <img src={iconEdit} alt="pen" />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ProductCard;
