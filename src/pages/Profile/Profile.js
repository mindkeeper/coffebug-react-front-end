import React, { Fragment, useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Profile.module.css";
import iconEdit from "../../assets/img/profile/edit-icon.png";
import avatar from "../../assets/img/profile/profile-dummy.png";
import { editProfile, getProfile } from "../../utils/fetcher";
import withNavigate from "../../helpers/withNavigate";
import { connect } from "react-redux";
import { logoutAction } from "../../redux/actions/auths";

const Profile = ({ navigate, dispatch }) => {
  const token = JSON.parse(localStorage.getItem("userInfo")).token;
  const refTarget = useRef(null);
  const [profile, setProfile] = useState({});
  const [body, setBody] = useState({});
  const [notEdit, setNotEdit] = useState(true);

  const onEdit = () => {
    setNotEdit(!notEdit);
  };
  const getBirthday = () => {
    const date = new Date(profile.birthday);
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return dd + "/" + mm + "/" + yyyy;
  };
  const requestProfile = async () => {
    try {
      const res = await getProfile();
      setProfile(res.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => [
    setBody({ ...body, [e.target.name]: e.target.value }),
  ];

  const imageHandler = (e) => {
    setBody({ ...body, image: e.target.files[0] });
  };
  const handleChanges = async (body) => {
    const formData = new FormData();
    Object.keys(body).forEach((e) => {
      formData.append(e, body[e]);
    });
    console.log(formData);
    try {
      await editProfile(formData, token);
      onEdit();
      setProfile({});
      await requestProfile();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(profile);
  useState(() => {
    requestProfile();
  }, [handleChanges]);
  console.log(profile.birthday);
  return (
    <Fragment>
      <NavBar />
      <main className={styles["main-container"]}>
        <div className={styles["container"]}>
          <h1>User Profile</h1>
          <section className={styles["user-info-container"]}>
            <aside className={`${styles["edit"]} ${styles["avatar"]}`}>
              <div className={styles["avatar-container"]}>
                <img
                  className={styles["avatar-img"]}
                  src={
                    !profile.image
                      ? avatar
                      : `http://localhost:8080/${profile.image}`
                  }
                  alt=""
                />
                <p className={styles["display-name"]}>
                  {profile.display_name || "your name here"}
                </p>
                <p className={styles["email-text"]}>{profile.email}</p>
              </div>
              <div className={styles["btn-container"]}>
                <button
                  className={`${styles["btn"]} ${styles["choose-avatar"]}`}
                  onClick={(e) => {
                    console.log("click");
                    e.preventDefault();
                    refTarget.current.click();
                  }}
                >
                  Choose Photo
                </button>
                <input
                  type="file"
                  ref={refTarget}
                  onChange={(e) => imageHandler(e)}
                  style={{ display: "none" }}
                />
                <button
                  className={`${styles["btn"]} ${styles["remove-avatar"]}`}
                >
                  Remove Photo
                </button>
              </div>
              <div className={styles["btn-container"]}>
                <button
                  className={`${styles["btn"]} ${styles["edit-password"]}`}
                >
                  Edit Password
                </button>
              </div>
              <p className={notEdit ? styles.hide : styles["save-questions"]}>
                Do you want to save the change's?
              </p>
              <div className={styles["btn-container"]}>
                <button
                  onClick={() => {
                    handleChanges(body);
                  }}
                  className={
                    notEdit
                      ? styles.hide
                      : `${styles["btn"]} ${styles["save-user-info"]}`
                  }
                >
                  Save Change
                </button>
                <button
                  onClick={() => {
                    setBody({});
                    onEdit();
                  }}
                  className={
                    notEdit
                      ? styles.hide
                      : `${styles["btn"]} ${styles["cancel"]}`
                  }
                >
                  Cancel
                </button>
              </div>
              <div
                onClick={() => {
                  dispatch(logoutAction(token));
                  localStorage.removeItem("userInfo");
                  navigate("/login");
                }}
                className={styles["btn-container"]}
              >
                <button className={`${styles["btn"]} ${styles["logout"]}`}>
                  Log out
                </button>
              </div>
            </aside>
            <aside className={`${styles["edit"]} ${styles["details"]}`}>
              <div
                onClick={() => {
                  onEdit();
                }}
                className={styles["edit-icon-container"]}
              >
                <img src={iconEdit} alt="pen" />
              </div>
              <div
                className={`${styles["details-container"]} ${styles["contact-htmlForm"]}`}
              >
                <p className={styles["contacts-text"]}>Contacts</p>
                <form className={styles["profile-form"]} action="">
                  <div className={styles["form-container"]}>
                    <div className={styles["form-item"]}>
                      <label htmlFor="email">Email address:</label>
                      <input
                        disabled={notEdit}
                        name="email"
                        onChange={changeHandler}
                        type="text"
                        placeholder={profile.email}
                      />
                    </div>
                    <div className={styles["form-item"]}>
                      <label htmlFor="email">Delivery address:</label>
                      <input
                        disabled={notEdit}
                        onChange={changeHandler}
                        name="address"
                        type="text"
                        placeholder={profile.address}
                      />
                    </div>
                  </div>
                  <div className={styles["form-container"]}>
                    <div className={styles["form-item"]}>
                      <label htmlFor="phone-number">Phone number:</label>
                      <input
                        disabled={notEdit}
                        onChange={changeHandler}
                        name="phone"
                        type="tel"
                        placeholder={profile.phone}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div
                className={`${styles["details-container"]} ${styles["details-from"]}`}
              >
                <p className={styles["details-text"]}>Details</p>
                <form action="">
                  <div className={styles["form-container"]}>
                    <div className={styles["form-item"]}>
                      <label htmlFor="name">Display name:</label>
                      <input
                        disabled={notEdit}
                        onChange={changeHandler}
                        name="display_name"
                        type="text"
                        placeholder={profile.display_name || "your name here"}
                      />
                    </div>
                    <div className={styles["form-item"]}>
                      <label htmlFor="first-name">First name:</label>
                      <input
                        disabled={notEdit}
                        onChange={changeHandler}
                        name="first_name"
                        type="text"
                        placeholder={profile.first_name || "your name here"}
                      />
                    </div>
                    <div className={styles["form-item"]}>
                      <label htmlFor="last-name">Last name:</label>
                      <input
                        disabled={notEdit}
                        onChange={changeHandler}
                        name="last_name"
                        type="text"
                        placeholder={profile.last_name || "your name here"}
                      />
                    </div>
                  </div>
                  <div className={styles["form-container"]}>
                    <div className={styles["form-item"]}>
                      <label htmlFor="birthday">Birthday:</label>
                      <input
                        disabled={notEdit}
                        onChange={changeHandler}
                        name="birthday"
                        type={notEdit ? "text" : "date"}
                        placeholder={getBirthday()}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className={styles["gender-selector"]}>
                <div className={styles["radio-container"]}>
                  <input
                    disabled={notEdit}
                    defaultChecked={
                      profile.gender && profile.gender === "Male"
                        ? "true"
                        : "false"
                    }
                    type="radio"
                    placeholder="Male"
                    name="gender"
                    value="Male"
                    onClick={(e) => {
                      setBody({ ...body, gender: e.target.value });
                    }}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className={styles["radio-container"]}>
                  <input
                    disabled={notEdit}
                    defaultChecked={
                      profile.gender && profile.gender === "Female"
                        ? "true"
                        : "false"
                    }
                    type="radio"
                    placeholder="Female"
                    name="gender"
                    value="Female"
                    onClick={(e) => {
                      setBody({ ...body, gender: e.target.value });
                    }}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
const stateProps = (reduxState) => {
  return reduxState;
};
export default withNavigate(connect(stateProps)(Profile));
