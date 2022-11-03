import React, { Fragment, Component } from "react";
import styles from "./Login.module.css";
import Footer from "../../components/Footer/Footer";
// image Import
import brandLogo from "../../assets/img/footer/brand-logo.png";
import google from "../../assets/img/google-logo.png";
import withNavigate from "../../helpers/withNavigate";
import Toast from "../../components/Toast/Toast";
import { connect } from "react-redux";
import { loginAction } from "../../redux/actions/auths";

class Login extends Component {
  state = {
    body: { email: "", password: "" },
    toastInfo: { display: false },
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.dispatch(loginAction(this.state.body));
    if (this.props.auths.isError)
      return this.setState({
        toastInfo: {
          display: true,
          status: "error",
          message: this.props.auths.error,
        },
      });
    if (this.props.auths.isFulfilled) {
      const userInfo = this.props.auths.userData;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      if (userInfo) this.props.navigate("/");
    }
  };

  changeHandler = (e) => {
    this.setState({
      body: { ...this.state.body, [e.target.name]: e.target.value },
    });
  };

  componentDidMount() {
    const userinfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userinfo) this.props.navigate("/");
  }
  componentDidUpdate() {}
  render() {
    const { navigate } = this.props;
    console.log(this.state.body);
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
                <form
                  onSubmit={this.submitHandler}
                  className={styles["form-login"]}
                >
                  <label htmlFor="email">Email address:</label>
                  <input
                    onChange={this.changeHandler}
                    name="email"
                    type="text"
                    placeholder="Enter your email address"
                  />
                  <label htmlFor="email">Password:</label>
                  <input
                    onChange={this.changeHandler}
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
  }
}
const stateToProps = (reduxState) => {
  return reduxState;
};
export default withNavigate(connect(stateToProps)(Login));
