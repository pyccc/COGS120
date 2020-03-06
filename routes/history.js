var data = require('../static/history.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('history',data);
};