
var User = require("../models/User.js");

module.exports = {
  signup: function (req, res) {
    res.render("signup");
  },
  signin: function (req, res) {
    res.render("signin", {
      message: req.flash("error")[0],
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
