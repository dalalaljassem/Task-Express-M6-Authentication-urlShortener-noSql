const express = require("express");
const passport = require("passport");
const { signup, signin, getUsers } = require("./users.controllers");
const router = express.Router();

router.post("/signup", signup);
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);

router.get("/users", getUsers);

module.exports = router;
