var express = require("express");
var app = express();

var middleware = {
	requireAuthentication : function(req, res, next) {
		console.log('Private Route Hit !');
		next();
	}
};

app.use(middleware.requireAuthentication);

app.get('/about', function(request, response) {
	response.send('About US !!!');
});

app.use(express.static(__dirname + "/public"));

app.listen(3000, function() {
	console.log("Webserver started")
});