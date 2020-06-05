let orm = require("./../db/orm.js");
let connection = orm.connectToDB();

class User {
  constructor(props) {
    const {username, password} = props;
    this.username = username;
    this.password = password;
  }
}

User.create = (user, callback) => {
  ///verifier pas de doublon email
  connection.query("INSERT INTO user SET ?", user, function (err, results) {
    if (err) return callback(err);
    callback(null);
  });
};

User.findOne = (username, callback) => {
  connection.query("SELECT * FROM user WHERE ?", { username: username }, function (err, user) {
    callback(err, user);
  });
};
module.exports = User;
