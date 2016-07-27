var middleware = {
	requireAuthentication : function(req, res, next) {
		console.log('Private Route Hit !');
		next();
	}
};

module.exports = middleware;