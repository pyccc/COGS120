var data = require('../static/data.json');

exports.view = function(req, res){
  data["versionB"] = false;
  res.render('chooseEmotion',data);
};

exports.chooseEmotion_B = function(req, res){
  data["versionB"] = true;
  res.render('chooseEmotion',data);
};
