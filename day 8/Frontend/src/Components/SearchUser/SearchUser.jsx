import React from "react";
import styles from "./SearchUser.module.css";

const SearchUser = ({ SearchInfo }) => {
  //   console.log("this is search Info", SearchInfo);
  return (
    <div className={styles.searchuserContainer}>
      <p>{SearchInfo?.name}</p>
      <p>{SearchInfo?.address}</p>
    </div>
  );
};

export default SearchUser;
