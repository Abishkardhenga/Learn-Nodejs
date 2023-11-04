const routes = require("express").Router();

routes.get("/user/:id", (req, res) => {
  let { id } = req.params;
  const searchedUser = user.find((item) => {
    return item.id === Number(id);
  });
  if (searchedUser) {
    res.status(200).json({ message: searchedUser, success: true });
  } else {
    res
      .status(200)
      .json({ message: `user is not found with this ${id}`, success: false });
  }
});

routes.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.status(403).json({ message: "enter the credentials ", success: false });
  }
  if (email !== Logincredentials.email) {
    res.status(403).json({
      message: "invalid email address",
      success: false,
    });
  }

  if (password.length === "") {
    res.status(403).json({ message: "enter something ", success: false });
  }

  if (password !== Logincredentials.password) {
    res.status(403).json({
      message: "invalid password",
      success: false,
    });
  } else {
    res.status(200).json({ message: "login successfully", success: true });
  }
});

const Logincredentials = {
  email: "Aabiskar@gmail.com",
  password: "dhenga",
};

const user = [
  {
    email: "aabiskar@gmail.com",
    password: "dhenga",
    id: 1,
  },

  {
    email: "akshay@gmail.com",
    password: "thapa",
    id: 2,
  },
  {
    email: "santosh@gmail.com",
    password: "kunwar",
    id: 3,
  },
];

module.exports = routes;
