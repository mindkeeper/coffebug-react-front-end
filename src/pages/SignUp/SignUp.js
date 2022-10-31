import React from "react";
import styles from "./SignUp.module.css";
import brandLogo from "../../assets/img/nav/brand-logo.png";
import google from "../../assets/img/google-logo.png";
import Footer from "../../components/Footer/Footer";
import withNavigate from "../../helpers/withNavigate";
const SignUp = ({ navigate }) => {
  return (
    <main className={styles["main-register"]}>
      <aside className={styles["image-side"]}></aside>
      <aside className={styles["form-side"]}>
        <nav className={styles["nav-container"]}>
          <div className={styles["container"]}>
            <div className={styles["brand-container"]}>
              <img src={brandLogo} alt="" />
              <a href="../index.html" className={styles["brand-text"]}>
                Coffebug
              </a>
            </div>
            <p className={styles["nav-sign-up"]}>Sign Up</p>
          </div>
        </nav>
        <section className={styles["form-container"]}>
          <div className={styles["container"]}>
            <form className={styles["form-sign-up"]}>
              <label for="email">Email address:</label>
              <input type="text" placeholder="Enter your email address" />
              <label for="password">Password:</label>
              <input type="password" placeholder="Enter your password" />
              <label for="phone">Phone Number:</label>
              <input type="tel" placeholder="Enter your phone number" />

              <button
                className={`${styles["btn"]} ${styles["sign-up"]}`}
                onclick="window.location.href = '../profile';"
              >
                Sign Up
              </button>
              <button
                className={`${styles["btn"]} ${styles["google-sign-up"]}`}
              >
                <img src={google} alt="" />
                <p>Sign up with Google</p>
              </button>
              <div className={styles["divider"]}>
                <div className={styles["line"]}></div>
                <p>Already have an account?</p>
                <div className={styles["line"]}></div>
              </div>
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className={`${styles["btn"]} ${styles["login"]}`}
              >
                Login
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </aside>
    </main>
  );
};
export default withNavigate(SignUp);
