var surveydata = require("../data/friends");

module.exports = function(app) {

// to get the data 
 app.get("./api/friends", function(req,res){
   res.json(surveydata);
 });

// to post useer info
 app.post("/api/friends", function(req,res){
   surveydata.push(req.body)
   res.json(true);
 });
}
