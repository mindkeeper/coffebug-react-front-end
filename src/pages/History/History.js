import React, { Fragment, useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./History.module.css";
import HistoryCard from "../../components/Cards/HistoryCard";
import { getHistory } from "../../utils/fetcher";
const History = () => {
  const token = JSON.parse(localStorage.getItem("userInfo")).token;
  const [history, setHistory] = useState([]);
  const requestHistory = async (token) => {
    try {
      const res = await getHistory(token);
      console.log(res.data.data);
      setHistory(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    requestHistory(token);
    console.log(history);
  });
  const currency = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };

  return (
    <Fragment>
      <NavBar />
      <main className={styles["main-history"]}>
        <div className={styles["container"]}>
          <section
            className={`col-12 ${styles["title-container"]} text-center`}
          >
            <h1>Let’s see what you have bought!</h1>
            <p> Select item to delete</p>
          </section>
          <section className={styles["select-all"]}>
            <button className={styles["btn-select-all"]}>Select all</button>
          </section>
          <section className={styles["list-history"]}>
            {history.map((e) => (
              <HistoryCard
                productName={e.product_name}
                price={currency(e.price)}
                status={e.status_name}
                image={e.image}
              />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
export default History;
