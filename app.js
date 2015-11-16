var express     = require("express"),
    app         = express(),
    http        = require("http"),
    cors        = require("cors"),
    mongoose    = require('mongoose'),
    multer      = require('multer'),
    cloudinary  = require('cloudinary');

/*var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads'); // Absolute path. Folder must exist, will not be created for you.
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({ storage: storage });*/
var port     = process.env.PORT || 80;
//conexión mongodb

mongoose.connect('mongodb://localhost/cafeteria', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});

cloudinary.config({
  cloud_name: "evileumas" ,
  api_key:"842825948279461",
  api_secret:"dGJAHsAqTEBpCPNEGjnzrTgV7NM"
});

app.configure(function () {
  app.use(express.static(__dirname + '/desktop'));
  app.use(cors());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(multer());
  app.use(app.router);
});

//endpoints de la api
require('./api/routes.js')(app);


app.listen(port, function() {
  console.log("Node server running on http://localhost");
});
