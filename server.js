const express = require('express');
const flash = require('connect-flash');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const orm = require('./db/orm.js');
const PORT = 8080;

require('./config/passport')(passport);

//Handlebars-------------------------------------------------------
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//-----------------------------------------------------------------

//Middleware-------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());
app.use(bodyParser.json());

//session is used to keep the user logged in 
app.use(session({ secret: 'secret', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}))

//flash is used to show a message on an incorrect login
app.use(flash());

//passport middleware methods
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));
//-----------------------------------------------------------------


//Routes-----------------------------------------------------------

app.use(require('./routes/html-routes.js'))
app.use('/api', require('./routes/api-routes.js'))

//-----------------------------------------------------------------

orm.connectToDB();

app.listen(PORT, function(){
	console.log('listening on port', PORT)
});
