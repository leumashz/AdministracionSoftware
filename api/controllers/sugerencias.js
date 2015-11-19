  var mongoose  = require('mongoose');
  var Sugerencia = require('../models/sugerencia.js');
  var cloudinary = require('cloudinary');

  exports.findAllSugerencias = function(req, res, next) {
  	Sugerencia.find(function(err, sugerencias) {
  		if(!err) {
  			res.json(sugerencias);
  		} else {
        res.send(null);
  		}
  	});
  };

  exports.findById = function(req, res, next) {
  	Sugerencia.findById(req.params.id, function(err, sugerencia) {
  		if(!err) {
  			res.json(sugerencia);
  		} else {
  			console.log('ERROR: ' + err);
        res.send(null);
  		}
  	});
  };

  exports.addSugerencia = function(req, res, next) {
    var sugerencia = new Sugerencia({
      id_usuario: req.body.id_usuario,
  		titulo:     req.body.titulo,
      comentario: req.body.comentario
  	});

   sugerencia.save(function(err) {
          if(!err) {
            res.json(sugerencia);
          } else {
            res.send(null);
          }
        });
    
  }

  exports.updateSugerencia = function(req, res, next) {
    Sugerencia.findById(req.params.id, function(err, sugerencia) {
      if(!req.body.titulo) sugerencia.titulo = req.body.titulo;
      if(!req.body.comentario) sugerencia.comentario   = req.body.comentario;
      
      sugerencia.save(function(err) {
        if(!err) {
           res.json(sugerencia);
        } else {
          res.json(null);
        }
          
      });

    });   
  };

  exports.deleteSugerencia = function(req, res, next) {
  	Sugerencia.findById(req.params.id, function(err, sugerencia) {
  		sugerencia.remove(function(err) {
  			if(!err) {
          res.send(null);
  			} else {
          res.send(null);
  			}
  		})
  	});
  }

  
