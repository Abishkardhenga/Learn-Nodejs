const {
  createNote,
  getNotes,
  deleteNote,
} = require("./controller/userController");

const routes = require("express").Router();

routes.post("/createNote", createNote);
routes.get("/note", getNotes);
routes.delete("/deleteNote/:id", deleteNote);
module.exports = routes;
