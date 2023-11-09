const { GetAllUser, GetSingleUser } = require("./controller/usercontroller");

const routes = require("express").Router();
routes.get("/user", GetAllUser);
routes.get("/user/:name", GetSingleUser);

module.exports = routes;
