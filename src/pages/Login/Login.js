import React, { Fragment } from "react";
import styles from "./Login.module.css";
import Footer from "../../components/Footer/Footer";
// image Import
import brandLogo from "../../assets/img/footer/brand-logo.png";
import twitter from "../../assets/img/footer/twitter.png";
import facebook from "../../assets/img/footer/facebook.png";
import instagram from "../../assets/img/footer/instagram.png";
import google from "../../assets/img/google-logo.png";
// image import end
const Login = () => {
  return (
    <Fragment>
      <main className={styles["main-login"]}>
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
              <a href="" className={styles["nav-login"]}>
                Login
              </a>
            </div>
          </nav>
          <section className={styles["form-container"]}>
            <div className={styles["container"]}>
              <form className={styles["form-login"]} action="">
                <label for="email">Email address:</label>
                <input type="text" placeholder="Enter your email address" />
                <label for="email">Password:</label>
                <input type="password" placeholder="Enter your password" />
                <p className={styles["forgot-password"]}>Forgot Password?</p>
                <button
                  className={`${styles["btn"]} ${styles["login"]}`}
                  onclick="window.location.href = '../profile';"
                >
                  Login
                </button>
                <button
                  className={`${styles["btn"]} ${styles["google-login"]}`}
                >
                  <img src={google} alt="" />
                  <p>Login with Google</p>
                </button>
                <div className={styles["divider"]}>
                  <div className={styles["line"]}></div>
                  <p>Dont have an account?</p>
                  <div className={styles["line"]}></div>
                </div>
                <button className={`${styles["btn"]} ${styles["sign-up"]}`}>
                  Sign Up
                </button>
              </form>
            </div>
          </section>
          <Footer />
        </aside>
      </main>
    </Fragment>
  );
};

export default Login;
