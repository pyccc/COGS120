var data = require('../static/data.json');

var history = require('../static/history.json');

exports.view = function(req, res) {

  data.emotions.forEach(emo=>{
    if(emo.name===req.params.type){
      emotion=emo;
    }
  })
  data['versionB'] = false;
  history.history.push({
    "time":new Date(),
    "action":"User is doing an auditory exercise_A."
  });
  res.render('Auditory', emotion);
};
exports.auditory_B = function(req, res) {
  data.emotions.forEach(emo=>{
    if(emo.name===req.params.type){
      emotion=emo;
    }
  })
  data['versionB'] = true;
  history.history.push({
    "time":new Date(),
    "action":"User is doing an auditory exercise_B."
  });
  res.render('Auditory', emotion);
};
