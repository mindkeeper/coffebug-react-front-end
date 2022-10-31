import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import styles from "./ForgotPassword.module.css";
import brandLogo from "../../assets/img/nav/brand-logo.png";
import background from "../../assets/img/forgot/forgot.png";
const ForgotPassword = () => {
  return (
    <main className={styles["main-reset"]}>
      <aside className={styles["image-side"]}></aside>
      <aside className={styles["form-side"]}>
        <div className={styles["container"]}>
          <nav className={styles["nav-container"]}>
            <img src={brandLogo} alt="" />
            <span>Coffebug</span>
          </nav>
          <section className={styles["form-reset-section"]}>
            <section className={styles["reset-text"]}>
              <h1>Forgot your password?</h1>
              <p className={styles["subtitle"]}>
                Don`t worry, we got your back!
              </p>
            </section>
            <form action="" className={styles["form-reset"]}>
              <input type="text" placeholder="Enter your email address here" />
              <button className={`${styles["btn"]} ${styles["btn-send"]}`}>
                Send
              </button>
            </form>
            <p className={styles["link-confirmation"]}>
              Click here if you didn`t receive any link in 2 minutes{" "}
              <span>01:52</span>
            </p>
            <button className={`${styles["btn"]} ${styles["btn-resend"]}`}>
              Resend Link
            </button>
          </section>
        </div>
        <Footer />
      </aside>
    </main>
  );
};

export default ForgotPassword;
