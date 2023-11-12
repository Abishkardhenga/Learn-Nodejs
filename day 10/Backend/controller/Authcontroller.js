const UserModel = require("../Model/UserModel");
const product = require("../Model/ProductModel");
const movie = require("../Model/MoviesModel");

const RegisterHandler = async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(200).json({ message: newUser, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

let ProductHandler = async (req, res) => {
  try {
    const newProduct = await product.create(req.body);
    res.status(200).json({ message: newProduct, success: true });
  } catch (error) {
    console.log(error);
  }
};

const MovieHandler = async (req, res) => {
  try {
    const newMovie = await movie.create(req.body);
    res.status(200).json({ message: newMovie, status: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { RegisterHandler, ProductHandler, MovieHandler };
