import React from "react";

import brandLogo from "../../assets/img/nav/brand-logo.png";
import styles from "./NavBar.module.css";
import withNavigate from "../../helpers/withNavigate";
import withLocation from "../../helpers/withLocation";
import withSearchParams from "../../helpers/withSearchParams";
import NavLogin from "./NavLogin";
import NavGuest from "./NavGuest";

const NavBar = ({ navigate }) => {
  const token = JSON.parse(localStorage.getItem("userInfo"))
    ? JSON.parse(localStorage.getItem("userInfo")).token
    : "";
  return (
    <header>
      <nav className="container">
        <div
          className={`row align-items-center justify-content-between ${styles["nav-section-container"]}`}
        >
          <section className={`col-md-3 col-6 ${styles["brand-container"]}`}>
            <img
              src={brandLogo}
              alt="brand-logo"
              className={styles["brand-logo"]}
            />
            <p
              className={styles["brand-text"]}
              onClick={() => {
                navigate("/");
              }}
            >
              Coffebug
            </p>
          </section>
          <section className={`col-6 ${styles["nav-link-container"]}`}>
            <ul className={styles["navbar-link"]}>
              <li
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  navigate("/products");
                }}
              >
                Products
              </li>
              <li
                onClick={() => {
                  navigate("/payment");
                }}
              >
                Your Cart
              </li>
              <li
                onClick={() => {
                  navigate("/history");
                }}
              >
                History
              </li>
            </ul>
          </section>
          {token ? <NavLogin /> : <NavGuest />}
        </div>
      </nav>
    </header>
  );
};

export default withSearchParams(withLocation(withNavigate(NavBar)));
