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
  index: async function (req, res) {
    let ttt = await Tweet.find();
    console.log(req.user);
    res.render("home", {
      username: req.user.username,
      tweets: ttt,
    });
  },
};
