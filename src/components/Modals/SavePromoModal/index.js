import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
const SavePromoModal = ({ id, setShowSuccess, showSuccess, msg }) => {
  const navigate = useNavigate();
  return (
    <>
      {showSuccess && (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <div className={styles["modal-body"]}>
              <p className={styles["modal-title"]}>{msg}</p>
            </div>
            <div className={styles["modal-footer"]}>
              <button
                onClick={() => {
                  setShowSuccess(!showSuccess);
                  navigate("/products");
                }}
                className={styles.button}
              >
                Back to all products
              </button>
              <button
                onClick={() => {
                  setShowSuccess(!showSuccess);
                  navigate(`/product/${id}`);
                }}
                className={styles.button}
              >
                See this product
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SavePromoModal;
