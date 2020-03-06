var data = require('../static/data.json');

var history = require('../static/history.json');

exports.view = function(req, res){

  data.emotions.forEach(emo=>{
    if(emo.name===req.params.type){
      emotion=emo;
    }
  })
  data['versionB'] = false;
  console.log(history);
  history.history.push({
    "time":new Date(),
    "action":"User is doing a breathing exercise_A."
  });
  console.log(history);
  res.render('emotionExercise',emotion);
};

exports.emotionExercise_B = function(req, res){

  data.emotions.forEach(emo=>{
    if(emo.name===req.params.type){
      emotion=emo;
    }
  })
  data['versionB'] = true;
  console.log(history);
  history.history.push({
    "time":new Date(),
    "action":"User is doing a breathing exercise_B."
  });
  console.log(history);
  res.render('emotionExercise',emotion);
};
