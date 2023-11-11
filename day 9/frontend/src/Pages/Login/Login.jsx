import React, { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let api = "http://localhost:8000/login";

  let FetchLogin = async () => {
    try {
      let { data, status } = await axios.post(api, {
        email,
        password,
      });
      if (status === 200) {
        navigate("/", { state: data.message });
      }
      console.log("this is response", data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <h3>Email</h3>
          <input
            placeholder="Enter the Email"
            className={styles.inputBox}
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.inputWrapper}>
          <h3>Password</h3>
          <input
            placeholder="Enter the Password"
            className={styles.inputBox}
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button onClick={FetchLogin} className={styles.loginBtn}>
            Login
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
