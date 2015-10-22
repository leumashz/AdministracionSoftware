  var Platillo = require('../models/platillo.js');

  //GET - regresa todos los platillos
  exports.findMenu = function(req, res, next) {
  	Platillo.find(function(err, platillos) {
  		if(!err) {
        console.log('GET /menu')
  			res.json(platillos);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - regresa un platillo por id
  exports.findById = function(req, res, next) {
  	Platillo.findById(req.params.id, function(err, platillo) {
  		if(!err) {
        console.log('GET /platillo/' + req.params.id);
  			res.json(platillo);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Insertar un platillo en la base da datos
  exports.addPlatillo = function(req, res, next) {
  	console.log('POST');
  	console.log(req.body);

  	var platillo = new Platillo({
  		nombre:         req.body.nombre,
  		descripcion: 	  req.body.descripcion,
  		precio:         req.body.precio,
  		url_img:        req.body.url_img,
  		rating:         req.body.rating,
  		tipo:           req.body.tipo,
  	});

  	platillo.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.json(platillo);
  };

  //PUT - Actualizar la información de un platillos
  exports.updatePlatillo = function(req, res, next) {
  	Platillo.findById(req.params.id, function(err, platillo) {
  		platillo.nombre         = req.body.nombre;
  		platillo.descripcion    = req.body.descripcion;
  		platillo.precio         = req.body.precio;
  		platillo.url_img        = req.body.url_img;
  		platillo.rating         = req.body.rating;
  		platillo.tipo           = req.body.tipo;

  		platillo.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.json(platillo);
  		});
  	});
  }

  //DELETE - Delete a Platillo with specified ID
  exports.deletePlatillo = function(req, res, next) {
  	Platillo.findById(req.params.id, function(err, platillo) {
  		platillo.remove(function(err) {
  			if(!err) {
  				console.log('Platillo Eliminado');
          res.send(null);
  			} else {
  				console.log('ERROR: ' + err);
          res.send(null);
  			}
  		})
  	});
  }

  