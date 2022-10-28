import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Profile.module.css";
import iconEdit from "../../assets/img/profile/edit-icon.png";
import avatar from "../../assets/img/profile/profile-dummy.png";

const Profile = () => {
  return (
    <Fragment>
      <NavBar />
      <main className={styles["main-container"]}>
        <div className={styles["container"]}>
          <h1>User Profile</h1>
          <section className={styles["user-info-container"]}>
            <aside className={`${styles["edit"]} ${styles["avatar"]}`}>
              <div className={styles["avatar-container"]}>
                <img className={styles["avatar-img"]} src={avatar} alt="" />
                <p className={styles["display-name"]}>Zulaikha</p>
                <p className={styles["email-text"]}>zulaikha17@gmail.com</p>
              </div>
              <div className={styles["btn-container"]}>
                <button
                  className={`${styles["btn"]} ${styles["choose-avatar"]}`}
                >
                  Choose Photo
                </button>
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
              <p className={styles["save-questions"]}>
                Do you want to save the change's?
              </p>
              <div className={styles["btn-container"]}>
                <button
                  className={`${styles["btn"]} ${styles["save-user-info"]}`}
                >
                  Save Change
                </button>
                <button className={`${styles["btn"]} ${styles["cancel"]}`}>
                  Cancel
                </button>
              </div>
              <div className={styles["btn-container"]}>
                <button className={`${styles["btn"]} ${styles["logout"]}`}>
                  Log out
                </button>
              </div>
            </aside>
            <aside className={`${styles["edit"]} ${styles["details"]}`}>
              <div className={styles["edit-icon-container"]}>
                <img src={iconEdit} alt="" />
              </div>
              <div
                className={`${styles["details-container"]} ${styles["contact-form"]}`}
              >
                <p className={styles["contacts-text"]}>Contacts</p>
                <form className={styles["profile-form"]} action="">
                  <div className={styles["form-container"]}>
                    <div className={styles["form-item"]}>
                      <label for="email">Email address:</label>
                      <input type="text" />
                    </div>
                    <div className={styles["form-item"]}>
                      <label for="email">Delivery address:</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className={styles["form-container"]}>
                    <div className={styles["form-item"]}>
                      <label for="phone-number">Phone number:</label>
                      <input type="tel" />
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
                      <label for="name">Display name:</label>
                      <input type="text" />
                    </div>
                    <div className={styles["form-item"]}>
                      <label for="first-name">First name:</label>
                      <input type="text" />
                    </div>
                    <div className={styles["form-item"]}>
                      <label for="last-name">Last name:</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className={styles["form-container"]}>
                    <div className={styles["form-item"]}>
                      <label for="birthday">Birthday:</label>
                      <input type="date" />
                    </div>
                  </div>
                </form>
              </div>
              <div className={styles["gender-selector"]}>
                <div className={styles["radio-container"]}>
                  <input type="radio" value="Male" name="choice" />
                  <label for="male">Male</label>
                </div>
                <div className={styles["radio-container"]}>
                  <input type="radio" value="Female" name="choice" />
                  <label for="female">Female</label>
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

export default Profile;
