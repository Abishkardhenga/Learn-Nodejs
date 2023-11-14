import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import styles from "./Notelist.module.css";
const Notelist = ({ item }) => {
  console.log(item);
  return (
    <div className={styles.noteList}>
      <p className={styles.noteText}>{item?.note}</p>
      <div className={styles.BtnWrapper}>
        <FiEdit className={styles.editBtn} />
        <AiFillDelete className={styles.deleteBtn} />
      </div>
    </div>
  );
};

export default Notelist;
