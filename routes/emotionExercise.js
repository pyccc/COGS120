var data = require('../static/data.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('emotionExercise',data);
};