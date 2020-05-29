const express = require("express");
const htmlRouter = express.Router();
const isAuth = require("./../middleware/isAuth.js");
const index_controller = require("./../controllers/indexController");
const tweet_controller = require("../controllers/tweetController");

htmlRouter.use(require("./html/auth.js"));
htmlRouter.get("/",  index_controller.index);
htmlRouter.get("/authenticated", isAuth, tweet_controller.index);
htmlRouter.post("/tweet", tweet_controller.create);

module.exports = htmlRouter;
