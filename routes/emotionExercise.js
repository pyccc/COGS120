var data = require('../static/data.json');

exports.view = function(req, res){
  
  var emotion;
  data.emotions.forEach(emo=>{
    if(emo.name===req.params.type){
      emotion=emo;
    }
  })
  res.render('emotionExercise',emotion);
};
