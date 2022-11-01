import React, { Fragment, useEffect, useState } from "react";
import styles from "./Login.module.css";
import Footer from "../../components/Footer/Footer";
// image Import
import brandLogo from "../../assets/img/footer/brand-logo.png";
import google from "../../assets/img/google-logo.png";
import withNavigate from "../../helpers/withNavigate";
import { login } from "../../utils/fetcher";
// image import end

const Login = ({ navigate }) => {
  const [userInfo, setUserInfo] = useState({});
  const [body, setBody] = useState({ email: "", password: "" });
  const [clickLogin, setClickLogin] = useState(false);
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    setUserInfo(userInfo);
    if (!userInfo) return;
    navigate("/");
  }, [clickLogin]);

  const submitHandler = async (e) => {
    // setbody({...body, email:e.target.email.value, password:e.target.password.value})
    e.preventDefault();
    if (!body.email || !body.password) console.log("Empty");
    try {
      const loginRequest = await login(body);
      localStorage.setItem("userInfo", JSON.stringify(loginRequest.data.data));
    } catch (error) {
      console.log(error);
    } finally {
      setClickLogin(!clickLogin);
    }
  };

  const changeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
    console.log(body);
  };

  return (
    <Fragment>
      <main className={styles["main-login"]}>
        <aside className={styles["image-side"]}></aside>
        <aside className={styles["form-side"]}>
          <nav className={styles["nav-container"]}>
            <div className={styles["container"]}>
              <div className={styles["brand-container"]}>
                <img
                  onClick={() => {
                    navigate("/");
                  }}
                  src={brandLogo}
                  alt=""
                />
                <p className={styles["brand-text"]}>Coffebug</p>
              </div>
              <p className={styles["nav-login"]}>Login</p>
            </div>
          </nav>
          <section className={styles["form-container"]}>
            <div className={styles["container"]}>
              <form onSubmit={submitHandler} className={styles["form-login"]}>
                <label htmlFor="email">Email address:</label>
                <input
                  onChange={changeHandler}
                  name="email"
                  type="text"
                  placeholder="Enter your email address"
                />
                <label htmlFor="email">Password:</label>
                <input
                  onChange={changeHandler}
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <p
                  onClick={() => {
                    navigate("/reset-password");
                  }}
                  className={styles["forgot-password"]}
                >
                  Forgot Password?
                </p>
                <button
                  type="submit"
                  className={`${styles["btn"]} ${styles["login"]}`}
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
                <button
                  onClick={() => {
                    navigate("/register");
                  }}
                  className={`${styles["btn"]} ${styles["sign-up"]}`}
                >
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

export default withNavigate(Login);
