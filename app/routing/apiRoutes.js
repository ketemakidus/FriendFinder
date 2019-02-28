var surveydata = require("../data/friends");

module.exports = function(app) {

// to get the data 
 app.get("./api/friends", function(req,res){
   res.sendFile(__dirname + "/survey")
   res.sendFile("survey.html");
   res.json(surveydata);
 });





	// Add new friend entry
	app.post('/api/friends', function(req, res) {

    surveydata.push(req.body)

    res.json(surveydata);
	
	});
};

