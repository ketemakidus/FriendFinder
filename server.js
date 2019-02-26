var ex = require("express");
var bp = require("body-parser");
var p = require("path");

var app = ex();
var PORT = process.env.PORT || 5000;

app.use(bp.urlencoded({
    extended: true
}));
app.use(bp.json());

app.use(ex.static(p.join(__dirname, "/app/public")));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("kidus you app is listing on " + PORT);
});