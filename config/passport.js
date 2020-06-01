var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/User");

module.exports = () => {
  //Setting the strategy for Passport
  passport.use(
    new LocalStrategy({ passReqToCallback: true }, function (req, username, password, done) {
      User.findOne(username, function (err, user) {
        user = user[0];
        if (err) return done(err);

        if (!user) return done(null, false);

        //comparing user passwords - return if not a match
        if (password !== user.password) return done(null, false);

        return done(null, user);
      });
    })
  );

  //These two methods are required to keep the user logged in via the session
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  return passport;
};
