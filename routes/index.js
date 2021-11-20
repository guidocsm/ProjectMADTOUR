const router = require("express").Router();
const User = require("../models/User.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/profile-page", (req, res) => {
  let user = req.session.currentUser;
  res.render("user/profile-page", user);
});

module.exports = router;
