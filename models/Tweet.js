let orm = require("./../db/orm.js");
let orm2 = require("./../db/orm2.js");

let connection = orm.connectToDB();

class Tweet {
  constructor(props) {
    this.content = props.content;
    this.created_at = new Date();
  }
}
//mysql
// Tweet.find = (callback) => {

//   connection.query("SELECT * FROM tweet", function (err, tweets) {
//     console.log(tweets);
//     callback(err, tweets);
//   });
// };

//mysql2
Tweet.find = async () => {
  const [rows, fields] = await orm2.execute(
    "SELECT tweet.id, user.id AS user_id, user.username, tweet.content, tweet.created_at  FROM tweet LEFT JOIN user ON  tweet.id_user = user.id  ORDER BY tweet.created_at DESC"
  );
  return rows;
};

//mysql2
Tweet.findLatests = async (id) => {
  const [
    rows,
    fields,
  ] = await orm2.execute(
    "SELECT tweet.id, user.id AS user_id, user.username, tweet.content, tweet.created_at FROM tweet \
  LEFT JOIN user ON  tweet.id_user = user.id  WHERE tweet.id > ? ORDER BY tweet.created_at DESC LIMIT 50",
    [id]
  );
  //console.log("tutu", rows, fields);
  return rows;
};

Tweet.create = async (tweetObj, userId) => {
  let sql = "Insert into tweet (content, created_at, id_user) values (?, ?, ?)";
  const [results, fields] = await orm2.execute(sql, [tweetObj.content, tweetObj.created_at, userId]);

  return results;
  // connection.query("INSERT INTO tweet SET ?", tweetObj, function (err, results) {
  //   if (err) return callback(false, err);
  //   callback(null);
  // });
};

module.exports = Tweet;
