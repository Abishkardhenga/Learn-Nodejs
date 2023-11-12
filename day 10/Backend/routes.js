const {
  RegisterHandler,
  ProductHandler,
  MovieHandler,
} = require("./controller/Authcontroller");

const routes = require("express").Router();

routes.post("/register", RegisterHandler);

routes.post("/product", ProductHandler);
routes.post("/movie", MovieHandler);

module.exports = routes;
