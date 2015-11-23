  var mongoose  = require('mongoose');
  var Platillo = require('../models/platillo.js');
  var cloudinary = require('cloudinary');
  var bodyParser  = require("body-parser");

  //GET - regresa todos los platillos
  exports.findMenu = function(req, res) {
  	Platillo.find(function(err, platillos) {
  		if(!err) {
        //console.log('GET /menu')
  			return res.json(platillos);
  		} else {
  			//console.log('ERROR: ' + err);
        return res.send({message: 'error'});
  		}
  	});
  };

  //GET - regresa un platillo por id
  exports.findById = function(req, res) {
  	Platillo.findById(req.params.id, function(err, platillo) {
  		if(err) res.sed(err);

  			
        res.json(platillo);
  		
  	});
  };

  //POST - Insertar un platillo en la base da datos
  exports.addPlatillo = function(req, res) {

  	var platillo = new Platillo({
  		
      nombre:         req.body.nombre,
  		descripcion: 	  req.body.descripcion,
  		precio:         req.body.precio,
  		url_img:        'http://res.cloudinary.com/evileumas/image/upload/v1446208401/platillo-vacio_v3uxxi.jpg',
  		rating:         5,
  		tipo:           1,
  	});
    
 
    cloudinary.uploader.upload(req.file.path, function(result) { 
    //console.log(result);
      platillo.url_img = result.url;
      platillo.save(function(err) {
          if(!err) {
            //console.log('Created');
            return res.redirect('/agregarPlatillo#success');
          } else {
            //console.log('ERROR: ' );
            platillo.url_img = 'http://res.cloudinary.com/evileumas/image/upload/v1446208401/platillo-vacio_v3uxxi.jpg';
            return res.redirect('/agregarPlatillo#fail');
          }
        });
    });
};
  //PUT - Actualizar la información de un platillos
  exports.updatePlatillo = function(req, res) {
  	
    Platillo.findById(req.params.id, function(err, platillo) {
      console.log(req.body);

      if(err) res.send(err);

      if(req.body.nombre) platillo.nombre  = req.body.nombre;
      if(req.body.descripcion) platillo.descripcion   = req.body.descripcion;
      if(req.body.precio) platillo.precio  = req.body.precio;
   
     
  		 

      platillo.save(function(err) {
        if(err)        
          res.send(err);
      
        res.json({ message: 'Exito' });
         
        
          
        });

    });   
  };

  //DELETE - Delete a Platillo with specified ID
  /*exports.deletePlatillo = function(req, res, next) {
  	Platillo.findById(req.params.id, function(err, platillo) {
  		platillo.remove(function(err) {
  			if(!err) {
  				console.log('Platillo Eliminado');
          //res.send(null);
  			} else {
  				console.log('ERROR: ' + err);
          //res.send(null);
  			}
  		})
  	});
  }

*/
exports.deletePlatillo = function(req, res) {
  Platillo.remove({
    _id: req.params.id
  }, function(err, platillo){
    if(err) res.send(err);
    
    res.json({ message: 'Platillo eliminado'});   
  });
}
