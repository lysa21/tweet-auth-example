
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
