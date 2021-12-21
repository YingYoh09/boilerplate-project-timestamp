// server.js
// where your node app starts

// init project
var bGround = require('fcc-express-bground');
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

var myApp = require('./myApp')
var port = 3001;
// listen for requests :)

bGround.setupBackgroundApp(app, myApp, __dirname).listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
