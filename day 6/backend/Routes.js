const router = require("express").Router();
const { User, UserProfile } = require("./controller/User");

router.get("/user", User);
router.get("/user/:id", UserProfile);

module.exports = router;
