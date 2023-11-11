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

    if (name.length < 10) {
      res.status(403).json({
        message: "length is name is short",
        status: false,
      });
    }
    if (password.length < 10) {
      res
        .status(403)
        .json({ message: "password is too short ", status: false });
    } else if (name.length > 10 && password.length > 10) {
      res.status(200).json({ message: "Suceessfuly registered", status: true });
    }
  }
};

module.exports = { RegisterHandler };
