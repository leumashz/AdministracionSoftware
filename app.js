var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    http        = require("http"),
    cors        = require("cors"),
    mongoose    = require('mongoose'),
    multer      = require('multer');
    server      = http.createServer(app),
    jwt         = require('jsonwebtoken'),
    tkn         = require('./api/controllers/middleware'),
    cloudinary  = require('cloudinary')
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
  //app.use(multer({dest:'./temp/'}).array('imgs',2));

  var port = 80;
  //var miRouter = express.Router();
  var apiRouter = require('./api/routes')(app, express);
  app.use('/api',apiRouter);

  //app.use(tkn.verifyToken);

  //var angularApp = express.Router();
    app.get('*', function(req, res){  
      //res.sendFile('index.html',{root: __dirname + '/desktop'});
      res.sendFile(path.join(__dirname + '/desktop/main/views/index.html'));
  }); 

 



mongoose.connect('mongodb://localhost/cafeteria', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(port, function() {
    console.log("Node server running on http://localhost");
  });
});