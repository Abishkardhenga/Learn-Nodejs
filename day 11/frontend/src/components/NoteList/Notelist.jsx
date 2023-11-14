import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import styles from "./Notelist.module.css";
import axios from "axios";
const Notelist = ({ item }) => {
  let deleteApi = "http://localhost:8000/deleteNote";

  let HandleDelete = async (item) => {
    try {
      let data = await axios.delete(`${deleteApi}/${item._id}`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.noteList}>
      <p className={styles.noteText}>{item?.note}</p>
      <div className={styles.BtnWrapper}>
        <FiEdit className={styles.editBtn} />
        <AiFillDelete
          onClick={() => {
            HandleDelete(item);
          }}
          className={styles.deleteBtn}
        />
      </div>
    </div>
  );
};

export default Notelist;
