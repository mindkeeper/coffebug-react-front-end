import React, { Fragment, useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Profile.module.css";
import iconEdit from "../../assets/img/profile/edit-icon.png";
import avatar from "../../assets/img/profile/profile-dummy.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import withNavigate from "../../helpers/withNavigate";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../components/Toast/Toast";
import userActions from "../../redux/actions/profile";
import ModalLogout from "../../components/Modals/ModalLogout";
import Loading from "../../components/Loading";

const Profile = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auths.userData.token);
  const refTarget = useRef(null);
  const profile = useSelector((state) => state.users.profile);
  const isLoading = useSelector((state) => state.users.isLoading);
  const [body, setBody] = useState({});
  const [imgPreview, setImgPreview] = useState(null);
  const [notEdit, setNotEdit] = useState(true);
  const [open, setOpen] = useState(false);

  const showModalHandler = () => setOpen(!open);

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

  const changeHandler = (e) => [
    setBody({ ...body, [e.target.name]: e.target.value }),
  ];

  const imageHandler = (e) => {
    const photo = e.target.files[0];
    const defaultSize = 2 * 1024 * 1024;
    if (
      photo.type !== "image/jpeg" &&
      photo.type !== "image/jpg" &&
      photo.type !== "image/png"
    )
      return toast.error(
        "Extension file wrong! Only .jpeg, .jpg, .png are allowed."
      );

    if (photo.size > defaultSize)
      return toast.error("File to large. Max. file size 2 Mb");
    setBody({ ...body, image: photo });
    setImgPreview(URL.createObjectURL(photo));
  };
  const handleChanges = (body) => {
    const formData = new FormData();
    Object.keys(body).forEach((e) => {
      formData.append(e, body[e]);
    });
    console.log(formData);
    const editSuccess = () => {
      toast.success("Edit Profile Success");
    };
    const editFailed = (err) => toast.error(`${err}`);
    dispatch(
      userActions.editProfileThunk(formData, token, editSuccess, editFailed)
    );
  };

  return (
    <Fragment>
      <NavBar />
      <main className={styles["main-container"]}>
        <div className={styles["container"]}>
          <h1>User Profile</h1>
          <section className={styles["user-info-container"]}>
            <aside className={`${styles["edit"]} ${styles["avatar"]}`}>
              <div className={styles["avatar-container"]}>
                {isLoading ? (
                  <Loading />
                ) : (
                  <img
                    className={styles["avatar-img"]}
                    src={imgPreview ? imgPreview : `${profile.image}`}
                    alt=""
                  />
                )}
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
                  showModalHandler();
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
                      {notEdit ? (
                        <input
                          disabled={notEdit}
                          // onChange={changeHandler}
                          name="address"
                          type="text"
                          placeholder={profile.address}
                          value=""
                        />
                      ) : (
                        <input
                          onChange={changeHandler}
                          name="address"
                          type="text"
                          placeholder={profile.address}
                        />
                      )}
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
                      {notEdit ? (
                        <input
                          disabled={notEdit}
                          // onChange={changeHandler}
                          name="display_name"
                          type="text"
                          placeholder={profile.display_name}
                          value=""
                        />
                      ) : (
                        <input
                          onChange={changeHandler}
                          name="display_name"
                          type="text"
                          placeholder={profile.display_name}
                        />
                      )}
                    </div>
                    <div className={styles["form-item"]}>
                      <label htmlFor="first-name">First name:</label>
                      {notEdit ? (
                        <input
                          disabled={notEdit}
                          // onChange={changeHandler}
                          name="first_name"
                          type="text"
                          placeholder={profile.first_name}
                          value=""
                        />
                      ) : (
                        <input
                          onChange={changeHandler}
                          name="first_name"
                          type="text"
                          placeholder={profile.first_name}
                        />
                      )}
                    </div>
                    <div className={styles["form-item"]}>
                      <label htmlFor="last-name">Last name:</label>
                      {notEdit ? (
                        <input
                          disabled={notEdit}
                          // onChange={changeHandler}
                          name="last_name"
                          type="text"
                          placeholder={profile.last_name}
                          value=""
                        />
                      ) : (
                        <input
                          onChange={changeHandler}
                          name="last_name"
                          type="text"
                          placeholder={profile.last_name}
                        />
                      )}
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
                  {notEdit ? (
                    <input
                      disabled={true}
                      // defaultChecked={profile.gender === "Male"}
                      checked={profile.gender === "Male"}
                      type="radio"
                      placeholder="Male"
                      name="gender"
                      value="Male"
                    />
                  ) : (
                    <input
                      // defaultChecked={profile.gender === "Male"}

                      type="radio"
                      placeholder="Male"
                      name="gender"
                      value="Male"
                      onChange={changeHandler}
                    />
                  )}
                  <label htmlFor="male">Male</label>
                </div>
                <div className={styles["radio-container"]}>
                  {notEdit ? (
                    <input
                      disabled={true}
                      // defaultChecked={profile.gender === "Female"}
                      checked={profile.gender === "Female"}
                      type="radio"
                      placeholder="Female"
                      name="gender"
                      value="Female"
                    />
                  ) : (
                    <input
                      // defaultChecked={profile.gender === "Female"}
                      type="radio"
                      placeholder="Female"
                      name="gender"
                      value="Female"
                      onChange={changeHandler}
                    />
                  )}
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
      <ModalLogout open={open} setOpen={setOpen} />
    </Fragment>
  );
};

export default withNavigate(Profile);
