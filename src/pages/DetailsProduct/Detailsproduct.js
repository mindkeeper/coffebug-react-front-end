import React, { Fragment, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./DetailsProduct.module.css";
import { useNavigate, useParams } from "react-router-dom";
import arrow from "../../assets/img/arrow.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import productActions from "../../redux/actions/products";
import transactionActions from "../../redux/actions/transaction";
const DetailsProduct = () => {
  const detail = useSelector((state) => state.products.detail);
  const isLoading = useSelector((state) => state.products.isLoading);
  const cart = useSelector((state) => state.transaction.cart);
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("Regular");
  const { id } = useParams();
  const role = useSelector((state) => state.auths.userData.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(productActions.getDetailProductThunk(id));
  }, [id, dispatch]);
  const currency = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };

  const changeSize = (size) => {
    setSize(size);
  };
  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((prevState) => {
      if (prevState === 0) return 0;
      return prevState - 1;
    });
  };

  const checkoutHandler = () => {
    const sizeId = size === "Regular" ? 1 : size === "Large" ? 2 : 3;
    const body = {
      ...cart,
      product_id: id,
      subtotal: parseInt(detail.price * count),
      sizeId,
      image: detail.image,
      qty: count,
    };
    dispatch(transactionActions.cart(body));
    toast.success("Added to cart");
  };
  return (
    <Fragment>
      <NavBar />
      <main className={styles["main-details"]}>
        <div className="container">
          <section className={`col-12 ${styles["categories"]}`}>
            <p className={styles["category-name"]}>
              {detail && detail.category_name}{" "}
              <span className={styles["span-brown"]}>
                &gt; {detail && detail.product_name}
              </span>
            </p>
          </section>
          <section className={`col-12 ${styles["details-container"]}`}>
            <aside className={styles["side-container"]}>
              {isLoading ? (
                <div className={styles["image-loading"]}></div>
              ) : (
                detail && (
                  <img
                    src={`${detail.image}`}
                    alt=""
                    className={styles["product-image"]}
                  />
                )
              )}

              <section className={styles["delivery-container"]}>
                <p className={styles["delivery-title"]}>Delivery and Time</p>

                <section className={styles["delivery-method"]}>
                  <div className={styles["method-name"]}>Dine in</div>
                  <div className={styles["method-name"]}>Door delivery</div>
                  <div className={styles["method-name"]}>Pick up</div>
                </section>
                <section className={`${styles["now-container"]} row`}>
                  <p className={`${styles["text-now"]} col-2`}>Now</p>
                  <div className={`${styles["pick"]} col-7`}>
                    <div className={styles["method-name"]}>Yes</div>
                    <div className={styles["method-name"]}>No</div>
                  </div>
                </section>
                <section className={`${styles["reservation-container"]} row`}>
                  <p className={`${styles["text-now"]} col-4`}>Set Time</p>
                  <input
                    type="time"
                    className={`${styles["input-time"]} col-7`}
                  />
                </section>
              </section>
            </aside>
            <aside className={styles["side-container"]}>
              <h1 className={`text-center ${styles["product-main-title"]}`}>
                {detail && detail.product_name}
              </h1>

              <div className={styles["desc-container"]}>
                <p className={styles["description"]}>
                  {detail && detail.description}
                </p>
                <p className={`${styles["delivery-desc"]}`}>
                  Delivery only on{" "}
                  <span className={styles["span-brown"]}>
                    Monday to friday at 1 - 7 pm
                  </span>
                </p>
              </div>

              <div className={`${styles["qty-price"]} col-12`}>
                <div className={styles["qty-value"]}>
                  <span
                    onClick={() => {
                      decrement();
                    }}
                    className={styles["minus"]}
                  >
                    &#60;
                  </span>
                  <input
                    type="text"
                    value={count}
                    className={styles["input-qty"]}
                  />
                  <span
                    onClick={() => {
                      increment();
                    }}
                    className={styles["plus"]}
                  >
                    &#62;
                  </span>
                </div>
                {detail && (
                  <p className={styles["price"]}>
                    {currency(detail.price * count)}
                  </p>
                )}
              </div>
              <div className={styles["buttons"]}>
                <button
                  className={`${styles["btn"]} ${styles["add-to-cart"]}`}
                  onClick={checkoutHandler}
                >
                  Add to cart
                </button>
                {role !== "Admin" ? (
                  <button
                    className={`${styles["btn"]} ${styles["ask-a-staff"]}`}
                  >
                    Ask a staff
                  </button>
                ) : (
                  <button
                    className={`${styles["btn"]} ${styles["ask-a-staff"]}`}
                    onClick={() => {
                      navigate(`/product/${id}/edit`);
                    }}
                  >
                    Edit Product
                  </button>
                )}
              </div>
            </aside>
          </section>
          <section
            className={`col-12 row align-items-center ${styles["finalize-container"]}`}
          >
            <div className={`col-12 col-md-3 ${styles["sizes-container"]}`}>
              <p className={`${styles["choose-text"]} text-center`}>
                Choose a size
              </p>
              <div className={`${styles["sizes"]}`}>
                <p
                  onClick={() => {
                    changeSize("Regular");
                  }}
                  className={`${styles["size"]}`}
                >
                  R
                </p>
                <p
                  onClick={() => {
                    changeSize("Large");
                  }}
                  className={`${styles["size"]}`}
                >
                  L
                </p>
                <p
                  onClick={() => {
                    changeSize("Extra Large");
                  }}
                  className={`${styles["size-xl"]}`}
                >
                  XL
                </p>
              </div>
            </div>
            <div className={`col-12 col-md-8 ${styles["check-out"]}`}>
              <div className={styles["checkout-left"]}>
                <img
                  src={detail && `${detail.image}`}
                  alt=""
                  className={`${styles["selected-item"]}`}
                />
                <div className={`${styles["selected-item-detail"]}`}>
                  <p className={`${styles["item-name"]} `}>
                    {detail && detail.product_name}
                  </p>
                  <p className={`${styles["qty"]} `}>
                    ({count}) {size}
                  </p>
                </div>
              </div>
              <div className={`${styles["final-container"]}`}>
                <p className={`${styles["checkout-title"]}`}>Checkout</p>
                <img className={styles["arrow"]} src={arrow} alt="arrow" />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
export default DetailsProduct;
