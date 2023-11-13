const {
  RegisterHandler,
  ProductHandler,
  MovieHandler,
  CreatorHandler,
  getUsers,
  getUserById,
} = require("./controller/Authcontroller");

const routes = require("express").Router();

routes.post("/register", RegisterHandler);

routes.post("/product", ProductHandler);
routes.post("/movie", MovieHandler);
routes.post("/creator", CreatorHandler);
routes.get("/users", getUsers);
routes.get("/users/:id", getUserById);

module.exports = routes;
