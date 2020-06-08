var User = require("../models/User.js");
const { check, validationResult } = require("express-validator");

module.exports = {
  signup: function (req, res) {
    res.render("signup");
  },
  signin: function (req, res) {
    res.render("signin", {
      message: req.flash("error")[0],
    });
  },
  show: function (req, res) {
    res.render("profil", {
      user: {}
    });
  },
  create: function (req, res) {
    const errors = validationResult(req);
    // Si les check ne sont pas vérifié
    if (!errors.isEmpty()) {
      req.flash(
        "errors",
        "Erreur"
      );
      return res.redirect("/signup");
    }
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
