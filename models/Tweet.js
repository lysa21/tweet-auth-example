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
  const [rows, fields] = await orm2.execute("SELECT * FROM tweet");
  console.log('tutu', rows, fields);
  return rows;
};

Tweet.create = (tweetObj, callback) => {
  connection.query("INSERT INTO tweet SET ?", tweetObj, function (err, results) {
    if (err) return callback(false, err);
    callback(null);
  });
};

module.exports = Tweet;
