import React, { useState } from "react";
import styles from "./Note.module.css";

import Notelist from "../NoteList/Notelist";

const Note = () => {
  let [noteCollection, setNoteCollection] = useState([]);
  let [note, setNote] = useState();
  return (
    <div className={styles.noteContainer}>
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.inputBox}
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            placeholder="Enter the Note"
            type="text"
          />
          <button className={styles.addBtn}>Add</button>
        </div>
        <div className={styles.listContainer}>
          <Notelist />
          <Notelist />
          <Notelist />
        </div>
      </div>
    </div>
  );
};

export default Note;
