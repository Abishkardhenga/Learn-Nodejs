const user = require("../models/User");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await user.find({ email });
    console.log("this is newUser", newUser[0].username);
    if (newUser[0].password !== password) {
      res.status(403).json({ message: "password mismatch", success: false });
    } else if (newUser[0].password == password) {
      res.status(200).json({ message: "password is correct", success: true });
    }
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: err, success: false });
  }
};

module.exports = { loginController };
