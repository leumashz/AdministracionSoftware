var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'); 

//conexión mongodb

mongoose.connect('mongodb://localhost/cafeta', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});


app.configure(function () {
  //app.use(express.static(__dirname + '/angular')); 
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  //app.use(app.router);
});

//endpoint default
app.get('/', function(req, res) {
  res.send("Hello world!");
});

//endpoints de la api
require('./api/routes.js')(app);


server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});