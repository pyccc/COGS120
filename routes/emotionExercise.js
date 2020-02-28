var data = require('../static/data.json');

exports.view = function(req, res){

  var emotion;
  data.emotions.forEach(emo=>{
    if(emo.name===req.params.type){
      emotion=emo;
    }
  })
  data['viewAlt'] = false;
  res.render('emotionExercise',emotion);
};

exports.emotionExercise_B = function(req, res){

  var emotion;
  data.emotions.forEach(emo=>{
    if(emo.name===req.params.type){
      emotion=emo;
    }
  })
  data['viewAlt'] = true;
  res.render('emotionExercise',emotion);
};
