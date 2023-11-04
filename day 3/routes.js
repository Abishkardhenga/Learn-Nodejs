const router = require("express").Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = {
    email: "Aabiskar@gmail.com",
    password: "dhenga",
  };

  if (email !== user.email) {
    return res
      .status(403)
      .json({ message: "email is not correct ", status: false });
  } else if (password !== user.password) {
    return res
      .status(403)
      .json({ message: "password  is not correct ", status: false });
  } else {
    return res
      .status(200)
      .json({ message: "Login successfully ", status: true });
  }
});

router.get("/login/:id", (req, res) => {
  const { id } = req.params;

  const searchedUser = user.find((item) => {
    return item.id === Number(id);
  });

  if (searchedUser) {
    res.status(200).json({
      message: searchedUser,
      success: true,
    });
  } else {
    res
      .status(404)
      .json({ message: `user  is not found for this ${id}`, success: false });
  }
});

const user = [
  {
    id: 1,
    username: "santosh",
    gender: "male",
  },
  {
    id: 4,
    gender: "female",
    username: "santosh",
  },
  {
    id: 2,
    username: "rita",
    gender: "female",
  },
];

module.exports = router;
