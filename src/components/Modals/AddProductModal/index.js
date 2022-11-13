import styles from "./styles.module.css";
const AddProductModal = ({ postProduct, open, setOpen }) => {
  return (
    <>
      {open && (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <div className={styles["modal-header"]}>
              <p className={styles["modal-title"]}>Add Product</p>
            </div>
            <div className={styles["modal-body"]}>
              Do you want to add this product?
            </div>
            <div className={styles["modal-footer"]}>
              <button
                onClick={() => {
                  postProduct();
                  setOpen(!open);
                }}
                className={styles.button}
              >
                yes
              </button>
              <button onClick={() => setOpen(!open)} className={styles.button}>
                no
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProductModal;
