// create user
// get user by id

const user = require("../models/User");

const CreateUser = async (req, res) => {
  try {
    let newUser = await user.create(req.body);
    res
      .status(200)
      .json({ message: "user created successfully", newUser, success: true });
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: err.message, success: true });
  }
};
const GetUserbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await user.findById(id);
    res.status(200).json({ message: data, success: true });
  } catch (err) {
    res.status(403).json({ message: err, success: false });
  }
};

const GetUser = async (req, res) => {
  try {
    const allUsers = await user.find();
    res.status(200).json({ message: allUsers, success: true });
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: err, success: false });
  }
};

module.exports = { CreateUser, GetUser, GetUserbyId };
