//Required to define http//
var http = require("http");

// Any number over 1024 works giving different route for different result//
var PORTONE = 7000; 
var PORTTWO = 7500;

// Make a function to call display the message while guiding the server//
function FirstRequest( req, res) {
	res.end('Your amazing' + req.url);
}
function SecondRequest ( req, res) {
	res.end('Please get a life' + req.url);
}

// Function will kick off when var is called when visited//
var serveroOne = http.createServer(FirstRequest);
var serverTwo = http.createServer(SecondRequest);

// Triggered server is successful//
serveroOne.listen(PORTONE, function(){
	console.log("server listening on: http://localhost:%s",PORTONE);
});
serverTwo.listen(PORTTWO, function(){
	console.log("server listening on: http://localhost:%s"{PORTTWO});
});

