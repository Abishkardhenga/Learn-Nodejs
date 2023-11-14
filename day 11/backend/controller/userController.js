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

module.exports = { createNote, getNotes };
