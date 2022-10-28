import React, { Fragment } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./History.module.css";
import HistoryCard from "../../components/Cards/HistoryCard";
const History = () => {
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
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
export default History;
