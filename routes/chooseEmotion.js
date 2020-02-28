var data = require('../static/data.json');

exports.view = function(req, res){
  data['chooseEmotion_B'] = false;
  res.render('chooseEmotion');
};

exports.chooseEmotion_B = function(req, res){
  data['chooseEmotion_B'] = true;
  res.render('chooseEmotion');
};
