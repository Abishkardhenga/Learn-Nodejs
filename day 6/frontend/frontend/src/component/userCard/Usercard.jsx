import React from "react";
import styles from "./Usercard.module.css";
import { Link } from "react-router-dom";

const Usercard = ({ item }) => {
  console.log("this is item", item);
  return (
    <Link className={styles.link} to="/userprofile/:id">
      <div className={styles.userContainer}>
        <p>id: {item.id}</p>
        <p>Name:{item.Name}</p>
        <p> email : {item.email} </p>
        <p>Address: {item.Address}</p>
        <p>phone no : {item.phone} </p>
      </div>
    </Link>
  );
};

export default Usercard;
