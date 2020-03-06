var data = require('../static/data.json');

exports.view = function(req, res) {

  data.emotions.forEach(emo=>{
    if(emo.name===req.params.type){
      emotion=emo;
    }
  })
  data['versionB'] = false;
  res.render('Auditory', emotion);
};
exports.auditory_B = function(req, res) {
  data.emotions.forEach(emo=>{
    if(emo.name===req.params.type){
      emotion=emo;
    }
  })
  data['versionB'] = true;
  res.render('Auditory', emotion);
};
