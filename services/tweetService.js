var orm = require("./../db/orm.js");

let connection = orm.connectToDB();

function create(userObj, callback) {
  connection.query("INSERT INTO tweets SET ?", userObj, function (err, results) {
    if (err) return callback(false, err);
    callback(true.null);
  });
}

module.exports.create = create;

function findTweets(callback) {
  connection.query("SELECT * FROM tweets", function (err, tweets) {
    console.log(tweets);
    callback(err, tweets);
  });
}
module.exports.findTweets = findTweets;
