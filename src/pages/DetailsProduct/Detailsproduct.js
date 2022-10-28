import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./DetailsProduct.module.css";
import brew from "../../assets/img/details/brew.png";
const DetailsProduct = () => {
  return (
    <Fragment>
      <NavBar />
      <main className={styles["main-details"]}>
        <div className="container">
          <section className={`col-12 ${styles["categories"]}`}>
            <p className={styles["category-name"]}>
              Favorites and Promos{" "}
              <span className={styles["span-brown"]}>&gt; Cold Brew</span>
            </p>
          </section>
          <section className={`col-12 ${styles["details-container"]}`}>
            <aside className={styles["side-container"]}>
              <img src={brew} alt="" className={styles["product-image"]} />

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
                Cold Brew
              </h1>
              <div className={styles["desc-container"]}>
                <p className={styles["description"]}>
                  Cold brewing is a method of brewing that combines ground
                  coffee and cool water and uses time instead of heat to extract
                  the flavor. It is brewed in small batches and steeped for as
                  long as 48 hours.
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
                  <span className={styles["minus"]}>&#60;</span>
                  <input
                    type="text"
                    value="1"
                    className={styles["input-qty"]}
                  />
                  <span className={styles["plus"]}>&#62;</span>
                </div>
                <p className={styles["price"]}>IDR 30.000</p>
              </div>
              <div className={styles["buttons"]}>
                <button className={`${styles["btn"]} ${styles["add-to-cart"]}`}>
                  Add to cart
                </button>
                <button className={`${styles["btn"]} ${styles["ask-a-staff"]}`}>
                  Ask a staff
                </button>
              </div>
            </aside>
          </section>
          <section
            className={`col-12 row align-items-center ${styles["finalize-container"]}`}
          >
            <div className={`col-4 col-md-3 ${styles["sizes-container"]}`}>
              <p className={`${styles["choose-text"]} text-center`}>
                Choose a size
              </p>
              <div className={`${styles["sizes"]}`}>
                <p className={`${styles["size"]}`}>R</p>
                <p className={`${styles["size"]}`}>R</p>
                <p className={`${styles["size"]}`}>R</p>
              </div>
            </div>
            <div
              className={`col-8 col-md-8 row aling-items-center ${styles["check-out"]}`}
            >
              <img
                src={brew}
                alt=""
                className={`${styles["selected-item"]} col-3`}
              />
              <div className={`${styles["selected-item-detail"]} col-4`}>
                <p className={`${styles["item-name"]} `}>Cold Brew</p>
                <p className={`${styles["qty"]} `}>(1x) Regular</p>
              </div>
              <div className={`${styles["final-container"]} col-5`}>
                <p className={`${styles["checkout-title"]}`}>Checkout</p>
                <p className={`${styles["arrow"]}`}>
                  <strong>&#8594;</strong>
                </p>
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
