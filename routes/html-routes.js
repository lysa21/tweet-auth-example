const express = require("express");
const htmlRouter = express.Router();
const isAuth = require("./../middleware/isAuth.js");
const tweet_controller = require("../controllers/tweetController");



htmlRouter.use(require("./html/auth.js"));
htmlRouter.use(isAuth)
htmlRouter.get("/home", tweet_controller.index);
htmlRouter.post("/tweet", tweet_controller.create);
//htmlRouter.get("/profil/:id", auth_controller.show);

module.exports = htmlRouter;
