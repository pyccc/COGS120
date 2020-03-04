var data = require('../static/data.json');

exports.view = function(req, res){
  data["versionB"] = false;
  res.render('ChooseExercise',data);
};
exports.ChooseExercise_B = function(req, res){
  data["versionB"] = true;
  res.render('ChooseExercise',data);
};
