import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <h3 className={styles.subHeading}>Username </h3>
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Enter the Username"
          />
        </div>
        <div className={styles.inputWrapper}>
          <h3 className={styles.subHeading}>Password </h3>
          <input
            className={styles.inputBox}
            type="password"
            placeholder="Enter the Password"
          />
        </div>
        <div className={styles.btnWrapper}>
          <button className={styles.loginBtn}>Login</button>
        </div>
        <div className={styles.registerTextWrapper}>
          <p>Don't have Email & Password ?</p>
          <Link to={"/register"} className={styles.registerText}>
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
