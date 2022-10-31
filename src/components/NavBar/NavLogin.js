import { useState } from "react";
import withNavigate from "../../helpers/withNavigate";
import styles from "./NavBar.module.css";
import chatLogo from "../../assets/img/nav/chat-logo.png";
import avatar from "../../assets/img/nav/profile-dummy.png";

const LoginNav = ({ navigate }) => {
  const [search, setSearch] = useState(() => "");
  const getImageIcon = JSON.parse(localStorage.getItem("userInfo")).payload
    .image;
  const imageIcon = `http://localhost:8080/${getImageIcon}`;
  const setValue = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = () => {
    return navigate(`/products?search=${search}`);
  };
  return (
    <section className={`${styles["button-container"]} col-6 col-md-3`}>
      <form onSubmit={getSearch}>
        <input
          type="text"
          placeholder="Search Here"
          className={styles["search"]}
          onChange={setValue}
        />
      </form>
      <img
        onClick={() => {
          localStorage.removeItem("userInfo");
          navigate("/login");
        }}
        src={chatLogo}
        className={styles["chat"]}
      ></img>
      <img
        onClick={() => {
          navigate("/profile/");
        }}
        src={getImageIcon ? imageIcon : avatar}
        className={styles["profile"]}
      ></img>
    </section>
  );
};

export default withNavigate(LoginNav);
