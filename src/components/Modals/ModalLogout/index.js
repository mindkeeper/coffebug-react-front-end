import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../../redux/actions/auths";
import styles from "./styles.module.css";

const ModalLogout = ({ setOpen, open }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = JSON.parse(localStorage.getItem("userInfo")).token || "";
    dispatch(logoutAction(token));
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <>
      {open && (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <div className={styles["modal-header"]}>
              <p className={styles["modal-title"]}>Logout</p>
            </div>
            <div className={styles["modal-body"]}>Are you sure?</div>
            <div className={styles["modal-footer"]}>
              <button
                onClick={() => {
                  handleLogout();
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

export default ModalLogout;
