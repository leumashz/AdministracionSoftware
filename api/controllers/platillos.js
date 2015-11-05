  var Platillo = require('../models/platillo.js');
  var cloudinary = require('cloudinary');

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
  	
  	var platillo = new Platillo({
  		
      nombre:         req.body.nombre,
  		descripcion: 	  req.body.descripcion,
  		precio:         req.body.precio,
  		url_img:        'http://res.cloudinary.com/evileumas/image/upload/v1446208401/platillo-vacio_v3uxxi.jpg',
  		rating:         5,
  		tipo:           1,
  	});

    
      //console.log(platillo);

      cloudinary.uploader.upload(req.files.imgTemp.path, function(result) { 
      console.log(result);
      platillo.url_img = result.url;
      platillo.save(function(err) {
          if(!err) {
            //console.log('Created');
            res.redirect('http://localhost/agregarPlatillo#success');
          } else {
            //console.log('ERROR: ' );
            platillo.url_img = 'http://res.cloudinary.com/evileumas/image/upload/v1446208401/platillo-vacio_v3uxxi.jpg';
            res.redirect('http://localhost/agregarPlatillo#fail');
          }
        });
    });
    
  }

  //PUT - Actualizar la información de un platillos
  exports.updatePlatillo = function(req, res, next) {
  	
    Platillo.findById(req.params.id, function(err, platillo) {
      
      if(req.body.nombre) platillo.nombre  = req.body.nombre;
      if(req.body.descripcion ) platillo.descripcion   = req.body.descripcion;
      if(req.body.precio) platillo.precio  = req.body.precio;
      if(req.body.url_img) platillo.url_img  = req.body.url_img;
      if(req.body.rating) platillo.rating  = req.body.rating;
  		if(req.body.tipo) platillo.tipo  = req.body.tipo;   

      console.log(platillo);
  		
      platillo.save(function(err) {
        if(!err) {
          console.log('Updated');
           res.json(platillo);
        } else {
          res.json(platillo);
        }
          
        });

    });   
  };

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

  