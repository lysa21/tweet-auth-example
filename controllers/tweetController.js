
var TweetModel = require("../models/Tweet.js");
var tweetService = require("../services/tweetService");

module.exports = {
  create: function (req, res) {
    var tweet = new TweetModel(req.body);
    tweetService.create(tweet, function (status, err) {
      if (err) {
        res.redirect("/signup");
        return false;
      }
      res.redirect("/authenticated");
    });
  },
  index: function (req, res) {
      tweetService.findTweets((err, tweets) => {
        console.log(req.user, tweets);
    
        res.render("authenticated", {
          username: req.user.username,
          tweets: tweets
        });
      })
  }
};
