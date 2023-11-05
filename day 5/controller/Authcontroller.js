const { LoginInfo } = require("../data");
// endpoint for  login

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return res
      .status(403)
      .json({ message: "enter all the credentials", success: false });
  }
  if (email !== LoginInfo.email) {
    return res
      .status(403)
      .json({ message: "enter valid email", success: false });
  }
  if (password !== LoginInfo.password) {
    res.status(403).json({ message: "enter valid password", success: false });
  } else {
    res.status(200).json({ message: "Login successfully", success: true });
  }
};

// this is a controller folder basicaaly for authrization stuff

// endpoint for registering new user endpoint
const register = (req, res) => {
  const { name, email, password, phoneNumber } = req.body;

  if (!name || !email || !password || !phoneNumber) {
    res
      .status(403)
      .json({ message: "enter all the credentials ", success: true });
  }
  if (name && email && password && phoneNumber) {
    res.status(200).json({ message: "successfully registered", success: true });
  }
};

module.exports = { login, register };
