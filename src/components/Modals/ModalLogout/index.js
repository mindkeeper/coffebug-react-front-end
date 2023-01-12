import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authsActions from "../../../redux/actions/auths";
import styles from "./styles.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearState } from "../../../utils/clearState";

const ModalLogout = ({ setOpen, open }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auths.userData.token);
  const handleLogout = () => {
    const logoutSuccess = () => {
      clearState(dispatch);
      toast.success("Logout Success!");
      navigate("/login");
    };
    dispatch(authsActions.logoutThunk(token, logoutSuccess));
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
