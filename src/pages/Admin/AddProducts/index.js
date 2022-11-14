import React, { Fragment, useRef, useState } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import styles from "./styles.module.css";
import camera from "../../../assets/img/addProduct/camera.png";

import Toast from "../../../components/Toast/Toast";
import { useNavigate } from "react-router-dom";
import { postData } from "../../../utils/fetcher";
import AddProductModal from "../../../components/Modals/AddProductModal";
import SaveProductModal from "../../../components/Modals/SaveProductModal";

const AddProduct = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState({});
  const [imgPrev, setImgPrev] = useState(null);
  const [toastInfo, setToastInfo] = useState({ display: false });
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState("Select Categories");
  const refTarget = useRef(null);
  const token = JSON.parse(localStorage.getItem("userInfo")).token;
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [response, setResponse] = useState({});
  const setDropdown = () => setIsActive(!isActive);
  const changeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };
  const imageHandler = (e) => {
    const photo = e.target.files[0];
    const defaultSize = 2 * 1024 * 1024;
    if (
      photo.type !== "image/jpeg" &&
      photo.type !== "image/jpg" &&
      photo.type !== "image/png"
    )
      return setToastInfo({
        display: true,
        status: "error",
        message: "Extension file wrong! Only .jpeg, .jpg, .png are allowed.",
      });

    if (photo.size > defaultSize)
      return setToastInfo({
        display: true,
        status: "error",
        message: "File to large. Max. file size 2 Mb",
      });
    setBody({ ...body, image: photo });
    setImgPrev(URL.createObjectURL(photo));
  };
  const postProduct = async () => {
    if (
      !body.image ||
      !body.productname ||
      !body.category_id ||
      !body.description ||
      !body.price
    ) {
      return setToastInfo({
        display: true,
        status: "error",
        message: "All input must be fulfilled",
      });
    }
    const formData = new FormData();
    Object.keys(body).forEach((e) => {
      formData.append(e, body[e]);
    });
    try {
      const response = await postData(token, formData);
      console.log(response);
      setShowSuccess(!showSuccess);
      setResponse({
        id: response.data.data.id,
        productName: response.data.data.product_name,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const showModalHandler = () => setOpen(!open);
  console.log(body);
  return (
    <Fragment>
      <Toast
        status={toastInfo.status}
        message={toastInfo.message}
        display={!toastInfo.display ? "none" : "flex"}
        changeState={(value) => {
          setToastInfo({ display: value });
        }}
      />
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
                <img
                  src={camera}
                  className={styles[!imgPrev ? "dummy-preview" : "none"]}
                  alt="product"
                />
                <img
                  className={styles[!imgPrev ? "none" : "image-preview"]}
                  src={imgPrev}
                  alt="preview"
                />
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
                name="productname"
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
                className={`${styles[isActive ? "active" : ""]} ${
                  styles["box-dropdown"]
                }`}
              >
                <p>{category}</p>
                <div className={styles.arrows}>
                  <p>&#9586;</p>
                  <p>&#9585;</p>
                </div>
              </div>
              <div className={isActive ? styles["list-dropdown"] : styles.none}>
                <p
                  onClick={() => {
                    setCategory("Coffee");
                    setBody({ ...body, category_id: 1 });
                    setDropdown();
                  }}
                >
                  Coffee
                </p>
                <p
                  onClick={() => {
                    setCategory("Non Coffee");
                    setBody({ ...body, category_id: 2 });
                    setDropdown();
                  }}
                >
                  Non Coffee
                </p>
                <p
                  onClick={() => {
                    setCategory("Foods");
                    setBody({ ...body, category_id: 3 });
                    setDropdown();
                  }}
                >
                  Foods
                </p>
                <p
                  onClick={() => {
                    setCategory("Add on");
                    setBody({ ...body, category_id: 4 });
                    setDropdown();
                  }}
                >
                  Add on
                </p>
              </div>
            </form>
            <div className={styles["btn-container"]}>
              <button
                onClick={() => {
                  showModalHandler();
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
      <AddProductModal
        open={open}
        setOpen={setOpen}
        postProduct={postProduct}
      />
      <SaveProductModal
        showSuccess={showSuccess}
        id={response.id}
        productName={response.productName}
        setShowSuccess={setShowSuccess}
      />
    </Fragment>
  );
};

export default AddProduct;
