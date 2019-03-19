//	Lightning Localhost Test
//	Usage:
//			command prompt
//			run 'node app.js'
//			Console will print message
//			Open URL in Browser to see message
//  Version:  app.js.v3_good
//  jenkins test1

//Imports
var express = require("express");
//var parse = require('utils-json-parse');
var http = require('http');
var bodyParser = require('body-parser');
var cors = require('cors');

// Use Express
var app = express()

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });


// ------------------------------------------------
// Express
// ------------------------------------------------
// GET request returns static text
//app.get('/', (req, res) => res.send('Hello......node.js server'));
app.get('/', function (req, res){
	var myTime = new Date().toLocaleString();
	    console.log("GET Request:  Success " + myTime);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("Result:  Test Success " + myTime);
		res.end();
});

// GET request returns string message
app.get('/test', function(request, response) {
		var myTime = new Date().toLocaleString();
	    console.log("GET Request:  Success " + myTime);
		response.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin' : '*'});
		response.write("Result:  Test Success " + myTime);
		response.end();
});


var server = app.listen(port, function () {
	var host = server.address().address;
	var port = server.address().port;

 //Print Message To Console
 console.log('Server running at http://%s:%s', host, port);
});
