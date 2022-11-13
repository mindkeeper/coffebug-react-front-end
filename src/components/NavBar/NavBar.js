import React, { useEffect, useState } from "react";

import brandLogo from "../../assets/img/nav/brand-logo.png";
import styles from "./NavBar.module.css";
import withNavigate from "../../helpers/withNavigate";
import withLocation from "../../helpers/withLocation";
import withSearchParams from "../../helpers/withSearchParams";
import chatLogo from "../../assets/img/nav/chat-logo.png";
import avatar from "../../assets/img/nav/profile-dummy.png";
import searchLogo from "../../assets/img/nav/search-logo.png";
import ModalLogout from "../Modals/ModalLogout";
import { useDispatch, useSelector } from "react-redux";
import { getProfileActions } from "../../redux/actions/profile";

const NavBar = ({ navigate }) => {
  const token = JSON.parse(localStorage.getItem("userInfo"))
    ? JSON.parse(localStorage.getItem("userInfo")).token
    : "";
  const role = JSON.parse(localStorage.getItem("userInfo"))
    ? JSON.parse(localStorage.getItem("userInfo")).role
    : "";
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const text = state.text;
  const title = state.title;
  // const [profile, setProfile] = useState({});
  const profile = useSelector((state) => state.profileProps.profile);
  const [search, setSearch] = useState(() => "");
  const [open, setOpen] = useState(false);
  const slide = () => {
    setState((state) => ({
      text:
        state.text === `${styles["slide-bar"]}` ? "" : `${styles["slide-bar"]}`,
    }));
  };

  const searchBar = () => {
    setState((state) => ({
      title: state.title === `${styles.show}` ? "" : `${styles.show}`,
    }));
  };

  const setValue = (event) => {
    console.log(event);
    setSearch(event.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    navigate(`/products?search=${search}`);
  };

  // const getDataProfile = async () => {
  //   try {
  //     const result = await getProfile();
  //     // console.log(result.data.result[0]);
  //     setProfile(result.data.data[0]);
  //     console.log(result);
  //   } catch (error) {
  //     // console.log(error);
  //     // console.log(error.response.data.statusCode);
  //     if (error.response.data.statusCode === 403) {
  //       navigate("/login");
  //     }
  //   }
  // };
  const showModalHandler = () => setOpen(!open);
  useEffect(() => {
    dispatch(getProfileActions());
  }, []);
  return (
    <nav className={styles.navbar}>
      <div className={styles["left-bar"]}>
        <div className={styles.logo}>
          <div
            className={styles["logo-img"]}
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={brandLogo} alt="logo" />
          </div>
          <p
            className={styles["logo-title"]}
            onClick={() => {
              navigate("/");
            }}
          >
            Coffebug
          </p>
        </div>
        <ol className={text}>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/products");
            }}
          >
            Product
          </li>
          <li
            onClick={() => {
              navigate(role === "Admin" ? "/orders" : "/payment");
            }}
          >
            {role === "Admin" ? "Orders" : "Your Cart"}
          </li>
          <li
            onClick={() => {
              navigate(role === "Admin" ? "/dashboard" : "/history");
            }}
          >
            {role === "Admin" ? "Dashboard" : "History"}
          </li>
        </ol>
      </div>
      {token ? (
        <section className={text}>
          <form className={styles.searching} onSubmit={getSearch}>
            <input
              className={title}
              type="text"
              placeholder="search here ..."
              onChange={setValue}
            />
            <div className={styles["search-img"]} onClick={searchBar}>
              <img src={searchLogo} alt="searching" />
            </div>
          </form>
          <div className={styles.chat}>
            <div className={styles.notif}>1</div>
            <img src={chatLogo} alt="" />
          </div>
          {(role !== "Admin" && (
            <div
              className={styles.profile}
              onClick={() => {
                navigate("/profile");
              }}
            >
              <img src={profile.image ?? avatar} alt="profile" />
            </div>
          )) || (
            <button
              onClick={() => showModalHandler()}
              className={styles["btn-logout"]}
            >
              Logout
            </button>
          )}
        </section>
      ) : (
        <section className={text}>
          <div className={styles["right-bar"]}>
            <div className={styles.input}>
              <p
                className={styles["btn-login"]}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </p>
              <button
                className={styles["btn-sign"]}
                type="submit"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        </section>
      )}
      <div className={styles["menu-toggle"]} onClick={slide}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ModalLogout open={open} setOpen={setOpen} />
    </nav>
  );
};

export default withSearchParams(withLocation(withNavigate(NavBar)));
