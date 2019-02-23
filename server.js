var express = require("express");
var path = require("path");

var app = express();

var port = process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

  

app.listen(PORT, function(){
console.log("kidus your app listening on port:" + PORT);
});
