const express = require("express");
const authRouter = express.Router();
const auth_controller = require("./../../controllers/authController");
const passport = require("./../../config/passport.js")();

authRouter.get("/signin", function (req, res) {
  res.redirect("/");
});
authRouter.get("/signup", auth_controller.signup);
//POSTs
authRouter.post(
  "/signin",
  passport.authenticate("local", { failureRedirect: "/", failureFlash: "Wrong Username or Password" }),
  function (req, res) {
    console.log(req.user);
    res.redirect("/authenticated");
  }
);

authRouter.post("/signup", auth_controller.create);

authRouter.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});
module.exports = authRouter;
