import withNavigate from "../../helpers/withNavigate";
import styles from "./NavBar.module.css";

const GuestNav = ({ navigate }) => {
  return (
    <section className={`${styles["button-container"]} col-6 col-md-3`}>
      <button
        className={`${styles["btn"]} ${styles["login"]}`}
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>

      <button
        className={`${styles["btn"]} ${styles["sign-up"]}`}
        onClick={() => {
          navigate("/register");
        }}
      >
        Sign Up
      </button>
    </section>
  );
};

export default withNavigate(GuestNav);
