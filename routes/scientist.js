
/*
 * GET role page.
 */

var data1 = require('../sampleData.json');

exports.view = function(req, res){
	console.log(data1);
  res.render('scientist', data1);
};
