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
	response.render('Auditory', data);
};
function getProjectData() {
	if (emotionsID == "random") {
		emotionsID = Math.floor(Math.random() * data.length) + 1;
	} else {
		emotionsID = parseInt(emotionsID);
	}
  var emotions = data[emotionsID-1]; // of by one, our first project has index 0
  return emotions;
};
