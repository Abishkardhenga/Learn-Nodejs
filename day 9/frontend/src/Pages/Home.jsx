import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./Home.module.css";
const Home = () => {
  const { state } = useLocation();
  console.log(state, "this is state ");
  return (
    <div className={styles.homeContainer}>
      <div className={styles.card}>
        <h3>UserCard</h3>
        <p className={styles.userInfo}> Email:{state.email}</p>
        <p className={styles.userInfo}>Passord: {state.password}</p>
      </div>
    </div>
  );
};

export default Home;
