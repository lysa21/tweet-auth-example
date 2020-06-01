
var User = require("../models/User.js");

module.exports = {
  signup: function (req, res) {
    res.render("auth", {
      welcomeText: "Sign Up",
      actionBtn: "signup",
      otherAction: "Signin",
    
    });
  },
  signin: function (req, res) {
    res.render("auth", {
      welcomeText: "Sign In",
      actionBtn: "signin",
      message: req.flash("error")[0],
      otherAction: "Signup",
    });
  },
  create: function (req, res) {
    var user = new User(req.body);
    User.create(user, function (err) {
      if (err) {
        res.redirect("/signup");
        return false;
      }
      res.redirect("/");
    });
  },
};
