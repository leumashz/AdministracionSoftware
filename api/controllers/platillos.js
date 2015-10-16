  var Platillo = require('../models/platillo.js');

  //GET - regresa todos los platillos
  exports.findAllPlatillos = function(req, res) {
  	Platillo.find(function(err, platillos) {
  		if(!err) {
        console.log('GET /platillos')
  			res.json(platillos);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - regresa un platillo por id
  exports.findById = function(req, res) {
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
  exports.addPlatillo = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var platillo = new Platillo({
  		nombre:         req.body.nombre,
  		descripcion: 	  req.body.descripcion,
  		precio:         req.body.precio,
  		url_ímg:        req.body.url_ímg,
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
  exports.updatePlatillo = function(req, res) {
  	Platillo.findById(req.params.id, function(err, platillo) {
  		platillo.nombre         = req.body.nombre;
  		platillo.descripcion    = req.body.descripcion;
  		platillo.precio         = req.body.precio;
  		platillo.url_ímg        = req.body.url_ímg;
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
  exports.deletePlatillo = function(req, res) {
  	Platillo.findById(req.params.id, function(err, platillo) {
  		platillo.remove(function(err) {
  			if(!err) {
  				console.log('Platillo Eliminado');
  			} else {
  				console.log('ERROR: ' + err);
          //res.send(null);
  			}
  		})
  	});
  }

  