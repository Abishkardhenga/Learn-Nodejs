import React, { useEffect, useState } from "react";
import styles from "./Note.module.css";
import axios from "axios";

import Notelist from "../NoteList/Notelist";

const Note = () => {
  let api = "http://localhost:8000/createnote";
  let getApi = "http://localhost:8000/note";
  let [noteCollection, setNoteCollection] = useState([]);
  let [note, setNote] = useState("");

  const handleAdd = async () => {
    if (note.trim().length === 0) {
      return;
    }

    try {
      const data = await axios.post(api, {
        note,
      });
      setNote(" ");
      console.log("this is data", data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetData();
  }, [noteCollection]);

  let GetData = async () => {
    try {
      let { data } = await axios.get(getApi);
      let op = data.message;
      setNoteCollection(op);
    } catch (err) {
      console.log(err);
    }
  };

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
          <button onClick={handleAdd} className={styles.addBtn}>
            Add
          </button>
        </div>
        <div className={styles.listContainer}>
          {noteCollection.length === 0 ? (
            <p>No Notes </p>
          ) : (
            noteCollection.map((item) => {
              return <Notelist item={item} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
