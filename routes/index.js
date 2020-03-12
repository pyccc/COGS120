
var history = require('../static/history.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};


exports.view1 = function(req, res){
  history.history.push({
    "time":new Date(),
    "action":"User liked exercise."
  });
  res.render('index');
};



exports.view2 = function(req, res){
  history.history.push({
    "time":new Date(),
    "action":"User disliked exercise."
  });
  res.render('index');
};