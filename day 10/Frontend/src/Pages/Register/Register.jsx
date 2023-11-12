import React, { useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";

const Register = () => {
  let registerApi = "http://localhost:8000/register";
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [phone, setPhone] = useState();

  let FetchRegister = async () => {
    try {
      let response = await axios.post(registerApi, {
        name,
        email,
        phone,
        password,
      });
      console.log("this is res", response);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className={styles.registerContainer}>
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <h3>Name</h3>
          <input
            className={styles.inputBox}
            placeholder="Enter the Name "
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={styles.inputWrapper}>
          <h3>Email</h3>
          <input
            className={styles.inputBox}
            placeholder="Enter the Email "
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.inputWrapper}>
          <h3>Phone</h3>
          <input
            className={styles.inputBox}
            placeholder="Enter the Phone Number "
            type="text"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className={styles.inputWrapper}>
          <h3>Password</h3>
          <input
            className={styles.inputBox}
            placeholder="Enter the Password "
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={styles.btnWrapper}>
          <button onClick={FetchRegister} className={styles.registerBtn}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
