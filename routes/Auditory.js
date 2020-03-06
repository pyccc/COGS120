var data = {
  "emotions": [
    {
      "name": "morehappy",
      "musicURL": "https://open.spotify.com/embed/playlist/37i9dQZF1DX5YTAi6JhwZm"
    },
    {
      "name": "neutral",
      "musicURL": "https://open.spotify.com/embed/playlist/37i9dQZF1DX4PP3DA4J0N8"
    }
  ]
};

exports.projectInfo = function(request, response) {
	var emotionsID = request.params.name;
	var emotions = getProjectData(emotionsID);
  	response.json(emotions);
};
exports.view = function(request, response) {
	//var emotionsID = request.params.id;
	//var emotion = getProjectData(emotionsID);
  data['versionB'] = false;
  response.render('Auditory', data);
};
exports.auditory_B = function(request, response) {
	//var emotionsID = request.params.id;
	//var emotion = getProjectData(emotionsID);
  data['versionB'] = true;
  response.render('Auditory', data);
};

