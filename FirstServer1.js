//Required to define http//
var http = require('http');

// Any number over 1024 works giving different route for different result//
var PORT = 7500 

// Make a function to call display the message while guiding the server//
function SecondPort ( req, res) {
	res.end('Please get a life' + req.url);
}

// Function will kick off when var is called when visited//
var server = http.createServer(SecondPort);

//if not functing properly display in the console//
server.listen(PORT, function(){
	console.log('server listening on : http://localhost:${PORT}');
})