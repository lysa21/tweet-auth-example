var orm = require("./../db/orm.js");
let connection = orm.connectToDB();

function create(userObj, callback) {
  connection.query("INSERT INTO users SET ?", userObj, function (err, results) {
    if (err) return callback(false, err);
    callback(true.null);
  });
}

module.exports.create = create;

function findUser(username, callback) {
  connection.query("SELECT * FROM users WHERE ?", { username: username }, function (err, user) {
    callback(err, user);
  });
}
module.exports.findUser = findUser;
