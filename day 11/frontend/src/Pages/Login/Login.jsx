import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let loginApi = "http://localhost:8000/login";
  let navigate = useNavigate();

  let LoginValidation = async () => {
    try {
      let data = await axios.post(loginApi, {
        email,
        password,
      });
      console.log("this is data");
      navigate("/", { state: userInfo });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <h3 className={styles.subHeading}>Email </h3>
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Enter the Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.inputWrapper}>
          <h3 className={styles.subHeading}>Password </h3>
          <input
            className={styles.inputBox}
            type="password"
            placeholder="Enter the Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={styles.btnWrapper}>
          <button onClick={LoginValidation} className={styles.loginBtn}>
            Login
          </button>
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
