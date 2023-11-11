import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="registerContainer">
      <div className="inputWrapper">
        <h3>Name</h3>
        <input className="inputBox" type="text" placeholder="enter the name" />
      </div>
      <div className="inputWrapper">
        <h3>Phone</h3>
        <input
          className="inputBox"
          type="text"
          placeholder="enter the Phone number"
        />
      </div>
      <div className="inputWrapper">
        <h3>Email</h3>
        <input className="inputBox" type="text" placeholder="enter the email" />
      </div>
      <div className="inputWrapper">
        <h3>Password</h3>
        <input
          className="inputBox"
          type="text"
          placeholder="enter the Password"
        />
      </div>
      <div className="buttonWrapper">
        <button className="RegisterBtn">Register</button>{" "}
      </div>
    </div>
  );
};

export default Register;
