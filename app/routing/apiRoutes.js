var path = require('path');

var friends = require('../data/friends.js');

module.exports = function (app) {
	
	app.get('/api/friends', function (req, res) {
		console.log('get');
		res.json(friends);
	});

	app.post('/api/friends', function (req, res) {
		
		var newfriend = req.body;

		var userResponses = newfriend.scores;

		var matchName = '';

		var matchImage = '';

		var totalDifference = 10000;

		console.log(matchName);

		console.log('matchImage', matchImage);

		// console.log(friends[i])


		for (var i = 0; i < friends.length; i++) {

			var diff = 0;

			for (var j = 0; j < userResponses.length; j++) {

				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}

			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = friends[i].Name;
				matchImage = friends[i].photo;
			}
		}
		
		friends.push(newfriend);

		res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
	});
}