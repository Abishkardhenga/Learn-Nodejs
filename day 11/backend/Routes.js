const {
  createNote,
  getNotes,
  deleteNote,
  updateNote,
} = require("./controller/userController");

const routes = require("express").Router();

routes.post("/createNote", createNote);
routes.get("/note", getNotes);
routes.delete("/deleteNote/:id", deleteNote);
routes.patch("/updateNote/:id", updateNote);
module.exports = routes;
