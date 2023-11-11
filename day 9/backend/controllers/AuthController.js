const RegisterHandler = (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    res
      .status(404)
      .json({ message: "enter all the credentials", status: false });
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      res.status(403).json({ message: "Invalid email format", status: false });
    }
    if (password.length < 10) {
      res
        .status(403)
        .json({ message: "password is too short ", status: false });
    } else if (name.length < 10) {
      res.status(403).json({ message: " name is short", status: false });
    } else {
      res.status(200).json({ message: req.body, status: true });
    }
  }
};

const userData = {
  email: "Aabiskardhenga29@gmail.com",
  password: "herohero",
};
const LoginHandler = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(403)
      .json({ message: "enter the both  credentials", status: false });
  }
  console.log(email !== userData.email, email);
  if (email !== userData.email) {
    return res
      .status(403)
      .json({ message: "Invalid email address ", status: false });
  }
  if (password !== userData.password) {
    return res
      .status(403)
      .json({ message: "Invalid  password", status: false });
  } else {
    res.status(200).json({ message: req.body, status: true });
  }
};

module.exports = { RegisterHandler, LoginHandler };
