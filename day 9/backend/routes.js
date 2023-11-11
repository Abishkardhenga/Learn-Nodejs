const {
  RegisterHandler,
  LoginHandler,
} = require("./controllers/AuthController");

const routes = require("express").Router();

routes.post("/register", RegisterHandler);
routes.post("/login", LoginHandler);

module.exports = routes;
