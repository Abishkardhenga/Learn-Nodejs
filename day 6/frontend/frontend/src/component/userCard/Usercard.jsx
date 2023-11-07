import React from "react";
import styles from "./Usercard.module.css";
import { Link, useLocation } from "react-router-dom";

const Usercard = ({ item }) => {
  // const { id } = useLocation();
  // console.log("this is item", item);
  return (
    <Link to={`/userprofile/${item.id}`} className={styles.userContainer}>
      {/* <p>id: {item.id}</p> */}
      <p>Name:{item.Name}</p>
      <p> email : {item.email} </p>
      <p>Address: {item.Address}</p>
      <p>phone no : {item.phone} </p>
    </Link>
  );
};

export default Usercard;
