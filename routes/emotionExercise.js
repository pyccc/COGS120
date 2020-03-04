var data = require('../static/data.json');

exports.view = function(req, res){

  var emotion;
  data.emotions.forEach(emo=>{
    if(emo.name===req.params.type){
      emotion=emo;
    }
  })
  data['versionB'] = false;
  res.render('emotionExercise',data);
};

exports.emotionExercise_B = function(req, res){

  var emotion;
  data.emotions.forEach(emo=>{
    if(emo.name===req.params.type){
      emotion=emo;
    }
  })
  data['versionB'] = true;
  res.render('emotionExercise',data);
};
