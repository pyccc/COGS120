/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var AltExercises = require('./routes/AltExercises');
var Breathing = require('./routes/Breathing');
var ChooseExercise = require('./routes/ChooseExercise');
var Done = require('./routes/Done');
var chooseEmotion = require('./routes/chooseEmotion');
var settings = require('./routes/settings');
//var home = require('./routes/home');
var emotionExercise = require("./routes/emotionExercise");
var Auditory = require("./routes/Auditory");
var history = require("./routes/history");

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/AltExercises', AltExercises.view);
app.get('/Breathing', Breathing.view);
app.get('/ChooseExercise', ChooseExercise.view);
app.get('/Done', Done.view);
app.get('/chooseEmotion', chooseEmotion.view);
app.get('/settings', settings.view);
//app.get('/home', home.view);
app.get('/emotionExercise/:type', emotionExercise.view);
app.get('/Auditory',Auditory.view);
app.get('/chooseEmotion_B',chooseEmotion.chooseEmotion_B);
app.get('/emotionExercise_B/:type',emotionExercise.emotionExercise_B);
app.get('/ChooseExercise_B',ChooseExercise.ChooseExercise_B);

app.get('/up',index.view1);
app.get('/down',index.view2);
app.get('/history',history.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
