/**
 * Created by Administrator on 2015/7/1.
 */

var express = require('express');
var exphbs = require('express-handlebars');
var port = process.env.PORT || 3003;
var path = require('path');

var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser({uploadDir: "./public/upload"}));
app.use(express.static(path.join(__dirname, 'public')));
//app.locals.moment = require('moment');

//var cookieParser = require('cookie-parser');
//var session = require('express-session');
//var mongoStore = require('connect-mongo')(session);
//var morgan = require('morgan');

var dbUrl = 'mongodb://localhost/blog';
mongoose.connect(dbUrl);

//app.set('views');

require('./config/routes')(app);
app.listen(port, function(){
  console.log('app start on port ' + port);
});

module.exports = app;