import React, { Fragment } from "react";
import styles from "./Footer.module.css";
import brandLogo from "../../assets/img/footer/brand-logo.png";
import facebook from "../../assets/img/footer/facebook.png";
import twitter from "../../assets/img/footer/twitter.png";
import instagram from "../../assets/img/footer/instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles["container"]}>
        <div className={styles["footer-container"]}>
          <div className={styles["brand-container"]}>
            <img src={brandLogo} alt="" />
            <a href="" className={styles["brand-text"]}>
              Coffebug
            </a>
          </div>
          <p className={styles["footer-text"]}>
            Coffee Shop is a store that sells some good meals, and especially
            coffee. We provide high quality beans
          </p>
          <div className={styles["social-container"]}>
            <div className={styles["logo-container"]}>
              <img src={facebook} alt="" />
            </div>
            <div className={styles["logo-container"]}>
              <img src={twitter} alt="" />
            </div>
            <div className={styles["logo-container"]}>
              <img src={instagram} alt="" />
            </div>
          </div>
          <p className={styles["copyright"]}>©2020CoffeeStore</p>
        </div>
        <div className={`${styles["footer-container"]} ${styles["link"]}`}>
          <div
            className={`${styles["footer-link-container"]} ${styles["product"]}`}
          >
            <p className={styles["product-text"]}>Product</p>
            <div className={styles["footer-link"]}>
              <a href="">Download</a>
              <a href="">Pricing</a>
            </div>
            <div className={styles["footer-link"]}>
              <a href="">Locations</a>
              <a href="">Countries</a>
            </div>
            <div className={styles["footer-link"]}>
              <a href="">Blog</a>
            </div>
          </div>
          <div
            className={`${styles["footer-link-container"]} ${styles["engage"]}`}
          >
            <p className={styles["engage-text"]}>Engage</p>
            <div className={styles["footer-link"]}>
              <a href="">Coffee shop?</a>
              <a href="">About-us</a>
            </div>
            <div className={styles["footer-link"]}>
              <a href="">FAQ</a>
              <a href="">Privacy policy</a>
            </div>
            <div className={styles["footer-link"]}>
              <a href="">Term of services</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
