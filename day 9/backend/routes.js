const { RegisterHandler } = require("./controllers/login");

const routes = require("express").Router();

routes.post("/register", RegisterHandler);

module.exports = routes;
