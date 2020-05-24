var UserModel = require("../models/User.js");
var orm = require("../db/orm.js");
var userService = require("../services/userService");

var passport = require("../config/passport.js")();
var auth_controller = require("../controllers/authController");
const isAuth = require("./../middleware/isAuth.js");

module.exports = function (app) {
  app.get("/", auth_controller.index);

  app.get("/signin", function (req, res) {
    res.redirect("/");
  });

  app.get("/signup", auth_controller.signup);

  app.get("/authenticated", isAuth, function (req, res) {
    console.log(req.user);
    res.render("authenticated", {
      username: req.user.username,
    });
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  //POSTs
  app.post(
    "/signin",
    passport.authenticate("local", { failureRedirect: "/", failureFlash: "Wrong Username or Password" }),
    function (req, res) {
      console.log(req.user);
      res.redirect("/authenticated");
    }
  );

  app.post("/signup", auth_controller.create);
};
