import React, { Fragment, useEffect, useState } from "react";
import Toast from "../../components/Toast/Toast";
import { login } from "../../utils/fetcher";
import styles from "./Test.module.css";
const TestPage = () => {
  const data = { email: "fcb.nyak@gmail.co", password: "coffebug" };
  const [toastInfo, setToastInfo] = useState({
    display: false,
    status: "",
    message: "",
  });
  const loginRequest = async () => {
    try {
      const res = await login(data);
      console.log(res.data);
    } catch (error) {
      setToastInfo({
        display: true,
        status: "error",
        message: error.response.data.msg,
      });
    }
  };
  //   useEffect(()=>{})
  return (
    <Fragment>
      <div className={styles["container"]}>
        <button
          onClick={() => {
            // showToast();
            loginRequest();
          }}
          className={styles["btn"]}
        >
          Show Toast
        </button>
        <Toast
          status={toastInfo.status}
          message={toastInfo.message}
          display={!toastInfo.display ? "none" : "block"}
          changeState={(value) => {
            setToastInfo({ display: value });
          }}
        />
      </div>
    </Fragment>
  );
};

export default TestPage;
