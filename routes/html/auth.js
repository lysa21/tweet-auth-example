const express = require("express");
const authRouter = express.Router();
const auth_controller = require("./../../controllers/authController");
const passport = require("passport");
const { check, validationResult } = require("express-validator");

const redirectIfAuth = require("./../../middleware/redirectIfAuth.js");

authRouter.post(
  "/signup",
  [
    // Utilisation du module express-validator pour check les entrées
    check("password").isLength({ min: 6 }),
    check("username").isLength({ min: 6 }),
  ],
  auth_controller.create
);

//POSTs
authRouter.post(
  "/signin",
  passport.authenticate("local", { failureRedirect: "/", failureFlash: "Wrong Username or Password" }),
  (req, res) => {
    console.log(req.user);
    res.redirect("/home");
  }
);

authRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

authRouter.get("/", redirectIfAuth, auth_controller.signin);
authRouter.get("/signup", redirectIfAuth, auth_controller.signup);

module.exports = authRouter;
