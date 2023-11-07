const { movie, movieInfo } = require("./controller/Usercontroller");

const router = require("express").Router();
router.get("/movie", movie);

router.get("/movie/:id", movieInfo);

module.exports = router;
