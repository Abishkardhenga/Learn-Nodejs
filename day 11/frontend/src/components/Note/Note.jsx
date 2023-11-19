import React, { useEffect, useState } from "react";
import styles from "./Note.module.css";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Note = () => {
  let [editMode, setEditMode] = useState(false);
  let deleteApi = "http://localhost:8000/deleteNote";
  let editApi = "http://localhost:8000/updateNote";

  let api = "http://localhost:8000/createnote";
  let [noteCollection, setNoteCollection] = useState([]);
  let [note, setNote] = useState("");
  let [editNode, setEditNode] = useState(null);
  let { state: user } = useLocation();
  let getApi = `http://localhost:8000/note?owner=${user.newUser._id}`;
  useEffect(() => {
    GetData();
    console.log("this is state", user);
  }, []);

  let HandleDelete = async (item) => {
    try {
      let data = await axios.delete(`${deleteApi}/${item._id}`);
      GetData();
    } catch (err) {
      console.log(err);
    }
  };

  let handleEdit = (item) => {
    setEditMode(true);
    setNote(item.note);
    setEditNode(item);
  };

  const handleAdd = async () => {
    setEditMode(false);
    if (note.trim().length === 0) {
      return;
    }
    if (editMode) {
      updateNote();
      GetData();
      setNote("");
      return;
    }

    try {
      const data = await axios.post(api, {
        note,
        owner: user._id,
      });
      setNote(" ");
      GetData();
      setEditNode(null);
      console.log("this is data", data);
    } catch (err) {
      console.log("this is ", err);
    }
  };

  let GetData = async () => {
    try {
      let { data } = await axios.get(getApi);
      let op = data.message;
      setNoteCollection(op);
    } catch (err) {
      console.log(err);
    }
  };
  let updateNote = async () => {
    try {
      await axios.put(`${editApi}/${editNode?._id}`, {
        note,
        owner: user?._id,
      });
      console.log("item itd", item.id);
    } catch (err) {
      console.log("this is err", err);
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
            {editMode === false ? "Add" : "Save"}
          </button>
        </div>
        <div className={styles.listContainer}>
          {noteCollection.length === 0 ? (
            <p>No Notes </p>
          ) : (
            noteCollection.map((item) => {
              return (
                <div className={styles.noteList}>
                  <p className={styles.noteText}>{item?.note}</p>
                  <div className={styles.BtnWrapper}>
                    <FiEdit
                      onClick={() => {
                        handleEdit(item);
                      }}
                      className={styles.editBtn}
                    />
                    <AiFillDelete
                      onClick={() => {
                        HandleDelete(item);
                      }}
                      className={styles.deleteBtn}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
