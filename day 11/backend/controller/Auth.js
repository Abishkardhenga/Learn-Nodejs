const user = require("../models/User");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await user.findOne({ email });
    if (!newUser) {
      return res
        .status(404)
        .json({ message: "User not found with this email", success: false });
    }

    console.log("this is newUser", newUser._id);
    if (newUser.password !== password) {
      res.status(403).json({
        message: "password mismatch",

        success: false,
      });
    } else if (newUser.password == password) {
      res
        .status(200)
        .json({ message: "login successfully", newUser, success: true });
    }
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: err, success: false });
  }
};

module.exports = { loginController };
