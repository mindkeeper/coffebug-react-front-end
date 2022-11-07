import { useState } from "react";
import withNavigate from "../../helpers/withNavigate";
import styles from "./NavBar.module.css";
import chatLogo from "../../assets/img/nav/chat-logo.png";
import avatar from "../../assets/img/nav/profile-dummy.png";
import searchLogo from "../../assets/img/nav/search-logo.png";
import { useEffect } from "react";
import { getProfile } from "../../utils/fetcher";

const LoginNav = ({ navigate }) => {
  const [search, setSearch] = useState(() => "");
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState([]);
  const showInput = () => {
    setShow(!show);
  };

  const requestProfile = async () => {
    try {
      const res = await getProfile();
      setProfile(res.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const setValue = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    requestProfile();
  }, []);

  const getSearch = () => {
    return navigate(`/products?search=${search}`);
  };
  const imageIcon = `${profile.image}`;
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
        src={imageIcon ?? avatar}
        className={styles["profile"]}
        alt="Profile-icon"
      ></img>
    </section>
  );
};

export default withNavigate(LoginNav);
