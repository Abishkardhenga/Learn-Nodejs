const data = require("../data");
const User = (req, res) => {
  res.status(200).json({ message: data, success: true });
};

const UserProfile = (req, res) => {
  const { id } = req.params;

  const SearchedProfile = data.find((item) => {
    item.id === Number(id);
  });

  if (SearchedProfile) {
    res.status(200).json({ message: SearchedProfile, success: true });
  } else {
    res.status(403).json({ message: "USER NOT FOUND", success: false });
  }
};

module.exports = { User, UserProfile };
