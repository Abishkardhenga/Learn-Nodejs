const routes = require("express").Router();
const { login, register } = require("./controller/Authcontroller");
const { User } = require("./controller/userController");
const { userInfo, LoginInfo } = require("./data");

routes.get("/user/:id", User);

routes.post("/login", login);

routes.post("/register", register);

// used controller here to imporve code quality

module.exports = routes;
