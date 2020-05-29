var UserModel = require("../models/User.js");
var userService = require("../services/userService");

module.exports = {
  index: function (req, res) {
    res.render("index", {
      welcomeText: "Sign In",
      actionBtn: "signin",
      message: req.flash("error")[0],
      otherAction: "Signup",
    });
  },
};
