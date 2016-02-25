var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var appConfig = require('./package.json');

mongooseOb = require('mongoose');
ObjectId = require('mongoose').Types.ObjectId;
mongooseOb.connect(appConfig.dbAmazonCloud);

var connectionDB = mongooseOb.connection;
connectionDB.on('error', console.error.bind(console, 'Connection error:'));
connectionDB.once('open', function(){

  console.log('Connected to amazon cloud!');

  //Load schemas
  User = require('./models/schemas/User');
  console.log('Load schema \"User\" success!');

  Session = require('./models/schemas/Session');
  console.log('Load schema \"Session\" success!');

  UserRelationship = require('./models/schemas/UserRelationShip');
  console.log('Load schema \"UserRelationship\" success!');

  Post = require('./models/schemas/Post');
  console.log('Load schema \"Post\" success!');

  Album = require('./models/schemas/Album');
  console.log('Load schema \"Album\" success!');

  Media = require('./models/schemas/Media');
  console.log('Load schema \"Media\" success!');

  Relation = require('./models/schemas/Relation');
  console.log('Load schema \"Relation\" success!');

  Gift = require('./models/schemas/Gift');
  console.log('Load schema \"Gift\" success!');

  RoomCategory = require('./models/schemas/RoomCategory');
  console.log('Load schema \"RoomCategory\" success!');

  Room = require('./models/schemas/Room');
  console.log('Load schema \"Room\" success!');

  Message = require('./models/schemas/Message');
  console.log('Load schema \"Message\" success!');

  RoomJoin = require('./models/schemas/RoomJoin');
  console.log('Load schema \"RoomJoin\" success!');

  RoomChat = require('./models/schemas/RoomChat');
  console.log('Load schema \"RoomChat\" success!');

  PostComment = require('./models/schemas/PostComment');
  console.log('Load schema \"PostComment\" success!');

  PostLike = require('./models/schemas/PostLike');
  console.log('Load schema \"PostLike\" success!');

  MediaComment = require('./models/schemas/MediaComment');
  console.log('Load schema \"MediaComment\" success!');

  MediaLike = require('./models/schemas/MediaLike');
  console.log('Load schema \"MediaLike\" success!');
});

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine Load
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
app.listen(appConfig.port, function() {
  console.log('Listening on *:' + appConfig.port);
});

module.exports = app;