import React from "react";

import brandLogo from "../../assets/img/nav/brand-logo.png";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header>
      <nav className="container">
        <div
          className={`row align-items-center ${styles["nav-section-container"]}`}
        >
          <section className={`col-md-3 col-6 ${styles["brand-container"]}`}>
            <img
              src={brandLogo}
              alt="brand-logo"
              className={styles["brand-logo"]}
            />
            <p className={styles["brand-text"]}>Coffebug</p>
          </section>
          <section className={`col-6 ${styles["nav-link-container"]}`}>
            <ul className={styles["navbar-link"]}>
              <li>Home</li>
              <li>Products</li>
              <li>Your Cart</li>
              <li>History</li>
            </ul>
          </section>
          <section
            className={`${styles["button-container"]} col-6 col-md-3 d-flex align-items-end`}
          >
            <button className={`${styles["btn"]} ${styles["login"]}`}>
              Login
            </button>

            <button className={`${styles["btn"]} ${styles["sign-up"]}`}>
              Sign Up
            </button>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
