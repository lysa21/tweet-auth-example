
var Tweet = require("../models/Tweet.js");

module.exports = {
  create: function (req, res) {
    var tweet = new Tweet(req.body);
    Tweet.create(tweet, function (status, err) {
      if (err) {
        res.redirect("/signup");
        return false;
      }
      res.redirect("/home");
    });
  },
  index: function (req, res) {
      Tweet.findTweets((err, tweets) => {
        console.log(req.user, tweets);
    
        res.render("home", {
          username: req.user.username,
          tweets: tweets
        });
      })
  }
};
