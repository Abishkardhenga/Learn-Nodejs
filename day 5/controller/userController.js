const { userInfo, LoginInfo } = require("../data");

const User = (req, res) => {
  const { id } = req.params;

  let searchedUser = userInfo.find((item) => {
    return item.id === Number(id);
  });

  if (searchedUser) {
    res.status(200).json({ message: searchedUser, success: true });
  } else {
    res.status(403).json({ message: "User not found", success: false });
  }
};

module.exports = { User };
