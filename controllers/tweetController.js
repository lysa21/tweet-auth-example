var Tweet = require("../models/Tweet.js");

module.exports = {
  create: async function (req, res) {
    var tweet = new Tweet(req.body);
    await Tweet.create(tweet, req.user.id);
    res.redirect("/home");
  },
  index: async function (req, res) {
    if (req.xhr) {
      let id = parseInt(req.query.id);
      let tweets = await Tweet.findLatests(id);
      res.status(200).json({ tweets: tweets });
    } else {
      let tweets = await Tweet.find();
      res.render("home", {
        username: req.user.username,
        tweets: tweets,
      });
    }
  },
};
