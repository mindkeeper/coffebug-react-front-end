import { useState } from "react";
import withNavigate from "../../helpers/withNavigate";
import styles from "./NavBar.module.css";
import chatLogo from "../../assets/img/nav/chat-logo.png";
import avatar from "../../assets/img/nav/profile-dummy.png";
import searchLogo from "../../assets/img/nav/search-logo.png";

const LoginNav = ({ navigate }) => {
  const [search, setSearch] = useState(() => "");
  const [show, setShow] = useState(false);

  const showInput = () => {
    setShow(!show);
  };
  const getImageIcon = JSON.parse(localStorage.getItem("userInfo")).image;

  const imageIcon = `http://localhost:8080/${getImageIcon}`;
  const setValue = (event) => {
    setSearch(event.target.value);
  };
  console.log(JSON.parse(localStorage.getItem("userInfo")).token);
  const getSearch = () => {
    return navigate(`/products?search=${search}`);
  };
  return (
    <section className={`${styles["button-container"]} col-6 col-md-3`}>
      <form onSubmit={getSearch}>
        <input
          type="text"
          placeholder="Search Here"
          className={`${styles[!show ? "" : "show"]} ${styles["search"]}`}
          onChange={setValue}
        />
      </form>
      <img
        onClick={() => {
          showInput();
        }}
        src={searchLogo}
        alt="img-logo"
        className={styles["search-btn"]}
      />
      <img src={chatLogo} alt="chat-icon" className={styles["chat"]}></img>
      <img
        onClick={() => {
          navigate("/profile/");
        }}
        src={getImageIcon ? imageIcon : avatar}
        className={styles["profile"]}
        alt="Profile-icon"
      ></img>
    </section>
  );
};

export default withNavigate(LoginNav);
