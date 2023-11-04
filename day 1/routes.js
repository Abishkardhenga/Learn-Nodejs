const { user } = require("./test");

const router = require("express").Router();

router.get("/user", (req, res) => {
  res.status(200).json(user);
});

router.get("/post", (req, res) => {
  res.status(404).json([{ post: "lal", img: "url" }]);
});

module.exports = router;
