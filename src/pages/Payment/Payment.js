import React, { Fragment } from "react";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Payment.module.css";
import hazelnut from "../../assets/img/payment/hazelnut.png";
import wings from "../../assets/img/payment/wings.png";
import cardIcon from "../../assets/img/payment/card-icon.png";
import bankIcon from "../../assets/img/payment/bank-icon.png";
import delivIcon from "../../assets/img/payment/deliv-icon.png";
import checkIcon from "../../assets/img/payment/check-icon.png";
import circleBrown from "../../";

function Payment() {
  return (
    <Fragment>
      <Navbar />
      <main className={styles["main-payment"]}>
        <div className="container">
          <div className="row justify-content-center">
            <div className={`${styles["step-container"]} col-12`}>
              <div className={`${styles["step"]} ${styles["step-order"]}`}>
                <div className={styles["circle"]}>
                  <img src={checkIcon} alt="" className={styles["check-img"]} />
                </div>
                <div className={styles["step-label"]}>Order</div>
              </div>
              <div className={`${styles["step"]} ${styles["step-checkout"]}`}>
                <div className={styles["circle"]}>
                  <img src={checkIcon} alt="" className={styles["check-img"]} />
                </div>
                <div className={styles["step-label"]}>Checkout</div>
              </div>
              <div className={`${styles["step"]} ${styles["step-payment"]}`}>
                <div className={styles["circle"]}>
                  <div className={styles["circle-brown"]}></div>
                </div>
                <div className={styles["step-label"]}>Payment</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles["title-bar"]}>
                <h1>Checkout your item now!</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className={styles["left-content"]}>
                <div className={styles.title}>
                  <h1>Order Summary</h1>
                </div>
                <div className={styles.order}>
                  <div className={styles["order-detail"]}>
                    <div className={styles["product-detail"]}>
                      <img src={hazelnut} alt="Hazelnut"></img>
                      <ol>
                        <li>Hazelnut Latte</li>
                        <li>x 1</li>
                        <li>Regular</li>
                      </ol>
                    </div>
                    <p>IDR 24.0</p>
                  </div>
                  <div className={styles["order-detail"]}>
                    <div className={styles["product-detail"]}>
                      <img src={wings} alt="Chicken Wing"></img>
                      <ol>
                        <li>Chicken Fire Wings</li>
                        <li>x 2</li>
                      </ol>
                    </div>
                    <p>IDR 30.0</p>
                  </div>
                </div>
                <div className={styles.payment}>
                  <div className={styles["payment-detail"]}>
                    <p>SUBTOTAL</p>
                    <p>TAX & FEES</p>
                    <p>SHIPPING</p>
                  </div>
                  <div className={styles["payment-price"]}>
                    <p>IDR 120.000</p>
                    <p>IDR 20.000</p>
                    <p>IDR 10.000</p>
                  </div>
                </div>
                <div className={styles.total}>
                  <h5>TOTAL</h5>
                  <h5>IDR 150.000</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className={styles["right-content"]}>
                <div className={styles.title}>
                  <h1>Address details</h1>
                  <button className={styles["btn-edit"]}>Edit</button>
                </div>
                <div className={styles["address-detail"]}>
                  <p>
                    <span>Delivery</span> to Iskandar Street
                  </p>
                  <div className={styles.border}>
                    <p>
                      Km 5 refinery road oppsite re public road, effurun,
                      Jakarta
                    </p>
                  </div>

                  <p>+62 81348287878</p>
                </div>
                <div className={styles.title}>
                  <h1>Payment method</h1>
                </div>
                <div className={styles["payment-bar"]}>
                  <div className={styles.method}>
                    <input type="radio" name="choice"></input>
                    <div className={styles.icon1}>
                      <img src={cardIcon} alt="card"></img>
                    </div>
                    <p>Card</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.method}>
                    <input type="radio" name="choice"></input>
                    <div className={styles.icon2}>
                      <img src={bankIcon} alt="bank"></img>
                    </div>
                    <p>Bank account</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.method}>
                    <input type="radio" name="choice"></input>
                    <div className={styles.icon3}>
                      <img src={delivIcon} alt="delivery"></img>
                    </div>
                    <p>Cash on delivery</p>
                  </div>
                </div>
                <button className={styles["btn-confirm"]}>
                  Confirm and pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Payment;
