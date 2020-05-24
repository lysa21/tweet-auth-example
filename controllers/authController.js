
var UserModel = require("../models/User.js");
var userService = require("../services/userService");

module.exports = {
  signup: function (req, res) {
    res.render("index", {
      welcomeText: "Sign Up",
      actionBtn: "signup",
      otherAction: "Signin",
    });
  },
  index: function (req, res) {
    res.render("index", {
      welcomeText: "Sign In",
      actionBtn: "signin",
      message: req.flash("error")[0],
      otherAction: "Signup",
    });
  },
  create: function (req, res) {
    var user = new UserModel(req.body);
    userService.create(user, function (status, err) {
      if (err) {
        res.redirect("/signup");
        return false;
      }
      res.redirect("/");
    });
  },
};
