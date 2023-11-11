import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let api = "http://localhost:8000/register";

  const HandleRegister = async () => {
    try {
      const response = await axios.post(api, {
        name,
        email,
        password,
        phone,
      });

      if (response.status == 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="registerContainer">
      <div className="inputWrapper">
        <h3>Name</h3>
        <input
          className="inputBox"
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          type="text"
          placeholder="Enter the name"
        />
      </div>
      <div className="inputWrapper">
        <h3>Phone</h3>
        <input
          className="inputBox"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="text"
          name="phone"
          placeholder="Enter the Phone number"
        />
      </div>
      <div className="inputWrapper">
        <h3>Email</h3>
        <input
          className="inputBox"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          name="email"
          placeholder="Enter the email"
        />
      </div>
      <div className="inputWrapper">
        <h3>Password</h3>
        <input
          className="inputBox"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="text"
          name="password"
          placeholder="Enter the Password"
        />
      </div>
      <div className="buttonWrapper">
        <button onClick={HandleRegister} className="RegisterBtn">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
