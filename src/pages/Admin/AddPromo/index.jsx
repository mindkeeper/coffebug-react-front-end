import React, { Component, Fragment } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import styles from "./styles.module.css";
import camera from "../../../assets/img/addProduct/camera.png";

class AddPromo extends Component {
  state = {
    body: {},
  };

  changeHandler = (e) => {};
  render() {
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
              <form action="submit">
                <div className={`${styles["image-container"]} `}>
                  <img src={camera} alt="product" />
                </div>
                <button
                  className={`${styles["btn"]} ${styles["btn-take-pic"]}`}
                >
                  Take Picture
                </button>
                <button
                  className={`${styles["btn"]} ${styles["btn-choose-gallery"]}`}
                >
                  Choose From Gallery
                </button>
              </form>
              <form action="submit" className={styles["form-discount"]}>
                <label htmlFor="discount">Enter Discount:</label>
                <input name="product_name" type="text" />
                <label htmlFor="durations">Durations</label>
                <input name="product_name" type="number" />
                <label htmlFor="code">Input Coupon Code</label>
                <input name="product_name" type="text" />
              </form>
            </section>
            <section className={`${styles["content"]} ${styles["right"]}`}>
              <form action="submit">
                <label htmlFor="name">Name:</label>
                <input
                  name="product_name"
                  type="text"
                  placeholder="Input product name"
                />
                <label htmlFor="price">Price:</label>
                <input name="price" placeholder="Input price" type="text" />
                <label htmlFor="description">Description:</label>
                <input
                  name="description"
                  placeholder="Input description"
                  type="text"
                />
              </form>
              <div className={styles["btn-container"]}>
                <button className={`${styles["btn"]} ${styles["btn-save"]}`}>
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
  }
}

export default AddPromo;
