let note = require("../models/Note");
let createNote = async (req, res) => {
  try {
    let data = await note.create(req.body);
    res.status(200).json({ message: data, success: true });
  } catch (err) {
    console.error(err);
  }
};
let getNotes = async (req, res) => {
  try {
    let data = await note.find();
    res.status(200).json({ message: data, success: true });
  } catch (err) {
    console.log(err);
  }
};

let deleteNote = async (req, res) => {
  try {
    let { id } = req.params;
    console.log("id ", id);
    let data = await note.findByIdAndDelete(id);
    console.log("data", data);
    res.status(200).json({
      message: data,
      text: `successfully delete the ${id} `,
      success: true,
    });
  } catch (err) {
    console.log("this is err", err);
    res.status(403).json({ message: err, success: false });
  }
};
let updateNote = async (req, res) => {
  const { id } = req.params;
  const { note } = req.body;
  console.log("this is id", id);
  try {
    let data = await note.findByIdAndUpdate(id, {
      note,
    });
    console.log("this is data", data);
    res.status(200).json({ message: data, success: true });
  } catch (err) {
    console.log("this is err", err);
  }
};

module.exports = { createNote, getNotes, deleteNote, updateNote };