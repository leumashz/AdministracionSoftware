var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    http        = require("http"),
    methodOverride = require("method-override"),
    cors        = require("cors"),
    mongoose    = require('mongoose'),
    multer      = require('multer'),
    server      = http.createServer(app),
    jwt         = require('jsonwebtoken'),
    cloudinary  = require('cloudinary'),
    //morgan      = require('morgan'),
    path        = require('path');

  cloudinary.config({
    cloud_name: "evileumas" ,
    api_key:"842825948279461",
    api_secret:"dGJAHsAqTEBpCPNEGjnzrTgV7NM"
  });

  app.use(bodyParser.urlencoded({ extended: true }));  
  app.use(bodyParser.json());  
  app.use(methodOverride());


  app.use('/',express.static(__dirname + '/desktop'));
  app.use(cors());
  app.use(multer({dest:'./temp/'}).single('tempImg'));

  var port = 80;

  var apiRouter = require('./api/routes')(app, express);
  app.use('/api',apiRouter);

  app.get('*', function(req, res){  
    res.sendFile('index.html',{root: __dirname + '/desktop/main/views/'});
  }); 
  //mongodb://localhost/cafeteria
  mongoose.connect('mongodb://localhost/cafeteria3', function(err, res) {  
    if(err) {
      console.log('ERROR: connecting to Database. ' + err);
    }
    app.listen(port, function() {
      console.log("Node server running on http://localhost");
    });
  });