let orm = require("./../db/orm.js");
let connection = orm.connectToDB();

class Tweet {
  constructor(props) {
	this.content = props.content;
	this.created_at = new Date();
  }
}

Tweet.findTweets = (callback) => {
  connection.query("SELECT * FROM tweet", function (err, tweets) {
    console.log(tweets);
    callback(err, tweets);
  });
};
Tweet.create = (tweetObj, callback) => {
  connection.query("INSERT INTO tweet SET ?", tweetObj, function (err, results) {
    if (err) return callback(false, err);
    callback(null);
  });
};

module.exports = Tweet;
