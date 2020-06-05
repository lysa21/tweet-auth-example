const express = require("express");
const apiRouter = express.Router();
const tweet_controller = require("../controllers/tweetController");

apiRouter.get('/', function (req, res) {
    res.json({
        "hello": "hello"
    });
  })


apiRouter.get("/tweets", tweet_controller.index);

module.exports = apiRouter;
