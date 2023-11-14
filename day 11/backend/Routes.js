const { createNote, getNotes } = require("./controller/userController");

const routes = require("express").Router();

routes.post("/createNote", createNote);
routes.get("/note", getNotes);

module.exports = routes;
