import React, { Fragment, Component } from "react";
import styles from "./SignUp.module.css";
import brandLogo from "../../assets/img/nav/brand-logo.png";
import google from "../../assets/img/google-logo.png";
import Footer from "../../components/Footer/Footer";
import withNavigate from "../../helpers/withNavigate";
import { signUp as postUser } from "../../utils/fetcher";
import Toast from "../../components/Toast/Toast";

class SignUp extends Component {
  state = {
    body: { email: "", password: "", phone: null },
    toastInfo: { display: false },
  };

  changeHandler = (e) => {
    this.setState({
      body: { ...this.state.body, [e.target.name]: e.target.value },
    });
    console.log(this.state.body);
  };
  submitHandler = async (e) => {
    e.preventDefault();
    if (
      !this.state.body.email ||
      !this.state.body.password ||
      !this.state.body.phone
    ) {
      this.setState({
        toastInfo: {
          display: true,
          status: "error",
          message: "All input must be fulfilled",
        },
      });
      return;
    }

    try {
      const signUpRequest = await postUser(this.state.body);
      console.log(signUpRequest);
      this.setState({
        toastInfo: {
          display: true,
          status: "success",
          message: "Register Success, Please Login!",
        },
      });
      this.props.navigate("/login");
    } catch (error) {
      this.setState({
        toastInfo: {
          display: true,
          status: "error",
          message: error.response.data.msg,
        },
      });
      console.log(error);
    }
  };
  render() {
    return (
      <Fragment>
        <Toast
          status={this.state.toastInfo.status}
          message={this.state.toastInfo.message}
          display={!this.state.toastInfo.display ? "none" : "flex"}
          changeState={(value) => {
            this.setState({ toastInfo: { display: value } });
          }}
        />
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
                <form
                  onSubmit={this.submitHandler}
                  className={styles["form-sign-up"]}
                >
                  <label htmlFor="email">Email address:</label>
                  <input
                    onChange={this.changeHandler}
                    name="email"
                    type="text"
                    placeholder="Enter your email address"
                  />
                  <label htmlFor="password">Password:</label>
                  <input
                    onChange={this.changeHandler}
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    onChange={this.changeHandler}
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />

                  <button
                    className={`${styles["btn"]} ${styles["sign-up"]}`}
                    type="submit"
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
                      this.navigate("/login");
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
      </Fragment>
    );
  }
}
export default withNavigate(SignUp);
