var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require("./middleware.js");

app.use(middleware.requireAuthentication);

app.get('/about', function(request, response) {
	response.send('About US !!!');
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function() {
	console.log("Webserver started")
});