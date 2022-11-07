import React, { Fragment, useRef, useState } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import styles from "./styles.module.css";
import camera from "../../../assets/img/addProduct/camera.png";
import { connect } from "react-redux";
import { addProductActions } from "../../../redux/actions/products";

const AddProduct = ({ dispatch, product }) => {
  const [body, setBody] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState("Select Categories");
  const refTarget = useRef(null);
  const token = JSON.parse(localStorage.getItem("userInfo")).token;

  const setDropdown = () => setIsActive(!isActive);
  const changeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };
  const imageHandler = (e) => {
    setBody({ ...body, image: e.target.files[0] });
  };
  const postProduct = () => {
    if (!body) return console.log("body cant be empty");
    dispatch(addProductActions(token, body));
  };
  console.log(token, body);
  return (
    <Fragment>
      <NavBar />
      <main className={styles["main-add-product"]}>
        <p className={styles["category-text"]}>
          Favorites and Promos{" "}
          <span className={styles["add-title"]}> &#62; Add new product</span>
        </p>
        <section className={styles["main-section"]}>
          <section className={`${styles["content"]} ${styles["left"]}`}>
            <form action="">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  refTarget.current.click();
                }}
                className={`${styles["image-container"]} ${styles["pointer"]}`}
              >
                <img src={camera} alt="product" />
              </div>
              <button className={`${styles["btn"]} ${styles["btn-take-pic"]}`}>
                Take Picture
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  refTarget.current.click();
                }}
                className={`${styles["btn"]} ${styles["btn-choose-gallery"]}`}
              >
                Choose From Gallery
              </button>
              <input
                onChange={(e) => imageHandler(e)}
                type="file"
                ref={refTarget}
                style={{ display: "none" }}
              />
            </form>
          </section>
          <section className={`${styles["content"]} ${styles["right"]}`}>
            <form action="">
              <label htmlFor="name">Name:</label>
              <input
                onChange={changeHandler}
                name="product_name"
                type="text"
                placeholder="Input product name"
              />
              <label htmlFor="price">Price:</label>
              <input
                onChange={changeHandler}
                name="price"
                placeholder="Input price"
                type="text"
              />
              <label htmlFor="description">Description:</label>
              <input
                onChange={changeHandler}
                name="description"
                placeholder="Input description"
                type="text"
              />
              <label htmlFor="description">Product Categories:</label>
              <div
                onClick={() => {
                  setDropdown();
                }}
                className={styles["box-dropdown"]}
              >
                <p>{category}</p>
                <div className={styles.arrows}>
                  <p>&#9586;</p>
                  <p>&#9585;</p>
                </div>
              </div>
              <div
                className={isActive ? styles["list-dropdown"] : styles.none}
              ></div>
            </form>
            <div className={styles["btn-container"]}>
              <button
                onClick={() => {
                  postProduct();
                }}
                className={`${styles["btn"]} ${styles["btn-save"]}`}
              >
                Save Product
              </button>
              <button className={`${styles["btn"]} ${styles["btn-cancel"]}`}>
                Cancel
              </button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};
const stateToProps = (prevState) => prevState;
export default connect(stateToProps)(AddProduct);
