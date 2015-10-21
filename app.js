var express  = require("express"),
    app      = express(),
    http     = require("http"),
    cors     = require("cors"),
    mongoose = require('mongoose'); 

//conexión mongodb

mongoose.connect('mongodb://localhost/platon', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});


app.configure(function () {
  //app.use(express.static(__dirname + '/angular')); 
  app.use(cors());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  //app.use(express.json());
  app.use(app.router);
});

//endpoint default
/*app.get('/', function(req, res) {
  res.send("Hello world!");
});*/

//endpoints de la api
require('./api/routes.js')(app);


app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});