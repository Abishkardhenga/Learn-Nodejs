const user = require("../data");
const GetAllUser = (req, res) => {
  res.status(200).json({ message: user, success: true });
};
const GetSingleUser = (req, res) => {
  console.log("user", user);
  const { name } = req.params;
  console.log("name", name);
  const searchedName = user.find((item) => {
    return item.name.toLowerCase().startsWith(name?.toLowerCase());
  });

  if (searchedName) {
    res.status(200).json({ message: searchedName, status: "success" });
  } else {
    res.status(404).json({ message: "user not found ", status: "false" });
  }
};

module.exports = { GetAllUser, GetSingleUser };
