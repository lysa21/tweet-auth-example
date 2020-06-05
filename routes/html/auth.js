const express = require("express");
const authRouter = express.Router();
const auth_controller = require("./../../controllers/authController");
const passport = require("passport");

const redirectIfAuth = require("./../../middleware/redirectIfAuth.js")


authRouter.post("/signup", auth_controller.create);

//POSTs
authRouter.post(
  "/signin",
  passport.authenticate("local", { failureRedirect: "/", failureFlash: "Wrong Username or Password" }),
   (req, res) => {
    console.log(req.user);
    res.redirect("/home");
  }
);


authRouter.get("/logout",  (req, res) => {
  req.logout();
  res.redirect("/");
});


authRouter.get("/", redirectIfAuth, auth_controller.signin);
authRouter.get("/signup", redirectIfAuth, auth_controller.signup);

module.exports = authRouter;
