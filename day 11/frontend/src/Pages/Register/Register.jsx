import React, { useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";

const Register = () => {
  let [username, setUsername] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let registerApi = " http://localhost:8000/createuser";

  let registerUser = async () => {
    try {
      alert("fucntion executing");
      await axios.post(registerApi, {
        username,
        email,
        password,
      });
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.registerContainer}>
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <h3 className={styles.subHeading}>Username </h3>
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Enter the Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
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
            type="text"
            placeholder="Enter the Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={styles.btnWrapper}>
          <button onClick={registerUser} className={styles.registerBtn}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
