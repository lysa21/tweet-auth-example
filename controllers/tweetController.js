var Tweet = require("../models/Tweet.js");

module.exports = {
  create: async function (req, res) {
    var tweet = new Tweet(req.body);
    await Tweet.create(tweet);
    res.redirect("/home");
  },
  index: async function (req, res) {
    let tweets = await Tweet.find();
    console.log(req.user);

   console.log(req.xhr)
    console.log('header', req.headers['x-requested-with'] )
   // console.log(req.get( 'X-Requested-With') )

    if (req.xhr)
    {
       res.json({tweets: tweets})
    }
    else {
      res.render("home", {
        username: req.user.username,
        tweets: tweets,
      });
    }
  
    
  },
};
