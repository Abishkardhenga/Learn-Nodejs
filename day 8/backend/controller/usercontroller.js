const user = require("../data");
const GetAllUser = (req, res) => {
  res.status(200).json({ message: user, success: true });
};
const GetSingleUser = (req, res) => {};

module.exports = { GetAllUser, GetSingleUser };
