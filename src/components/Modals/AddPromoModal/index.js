import styles from "./styles.module.css";
const AddPromoModal = ({ submitHandler, open, setOpen }) => {
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
                  submitHandler();
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

export default AddPromoModal;
