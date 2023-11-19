const { loginController } = require("./controller/Auth");
const {
  createNote,
  getNotes,
  deleteNote,
  updateNote,
} = require("./controller/NoteController");
const {
  CreateUser,
  GetUserbyId,
  GetUser,
} = require("./controller/userController");

const routes = require("express").Router();

routes.post("/createNote", createNote);
routes.get("/note", getNotes);
routes.delete("/deleteNote/:id", deleteNote);
routes.put("/updateNote/:id", updateNote);
routes.post("/register", CreateUser);
routes.get("/user", GetUser);
routes.get("/user/:id", GetUserbyId);
routes.post("/login", loginController)
module.exports = routes;
