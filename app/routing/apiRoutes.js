var surveydata = require("../data/friends");

module.exports = function(app) {

// to get the data 
 app.get("./api/friends", function(req,res){
   res.sendFile(__dirname + "/survey")
   res.sendFile("survey.html");
   res.json(surveydata);
 });

	app.post('/api/friends', function(req, res) {

    surveydata.push(req.body)

		res.json(surveydata);
		
		var newfriend = req.body;

		var userResponses = newfriend.scores;

		var matchName = '';
		var matchImage = '';
		