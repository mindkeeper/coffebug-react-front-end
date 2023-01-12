import React, { useState } from "react";
import styles from "./styles/Cart.module.css";
import image from "../../assets/img/home/hazlenut.png";
function Cart() {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    quantity > 0 && setQuantity(quantity - 1);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt="product" className={styles.image} />
      <div className={styles.info}>
        <p className={styles.product}>Cart</p>
        <p className={styles.price}>10000</p>
      </div>
      <div className={styles.counter}>
        <button className={styles.decrease} onClick={decreaseQuantity}>
          -
        </button>
        <p className={styles.quantity}>{quantity}</p>
        <button className={styles.increase} onClick={addQuantity}>
          +
        </button>
      </div>
    </div>
  );
}

export default Cart;
