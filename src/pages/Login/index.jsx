import React, { Fragment, useEffect, useState } from "react";
import styles from "./Login.module.css";
import Footer from "../../components/Footer/Footer";
// image Import
import brandLogo from "../../assets/img/footer/brand-logo.png";
import google from "../../assets/img/google-logo.png";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authsActions from "../../redux/actions/auths";
import userActions from "../../redux/actions/profile";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [body, setBody] = useState({});
  const authState = useSelector((state) => state.auths);

  const submitHandler = (e) => {
    e.preventDefault();
    const loginSuccess = (token) => {
      dispatch(userActions.getProfileThunk(token));
      toast.success("Login Success!");
      navigate("/");
    };
    const loginDenied = (err) => {
      toast.error(`${err}`);
    };
    dispatch(authsActions.loginThunk(body, loginSuccess, loginDenied));
  };

  const checkToken = (token) => {
    if (!token) return;
    const success = () => {
      navigate("/");
    };
    dispatch(userActions.getProfileThunk(token, success));
  };

  const changeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    checkToken(authState.userData.token);
  });
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
export default Login;
