import React, { Fragment } from "react";

import styles from "./styles/ProductCard.module.css";
import iconEdit from "../../assets/img/profile/edit-icon.png";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ id, productName, price, image, display }) => {
  const navigate = useNavigate();
  const role = JSON.parse(localStorage.getItem("userInfo")).role || "";
  console.log(role);
  return (
    <Fragment>
      <div className={styles["product-card"]}>
        <img
          onClick={() => {
            navigate(`/products/${id}`);
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
              navigate(`/admin/edit-product/${id}`);
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
