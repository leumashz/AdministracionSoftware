  var mongoose  = require('mongoose');
  var Info = require('../models/info.js');
  var cloudinary = require('cloudinary');

  exports.findInfo = function(req, res, next) {
  	Info.find(function(err, infos) {
  		if(!err) {
  			res.json(infos);
  		} else {
  			console.log('ERROR: ' + err);
        res.send(null);
  		}
  	});
  };

  exports.addInfo = function(req, res, next) {
  	//console.log(req.file.path);
  	var info = new Info({
      nombreCafeteria:  req.body.nombreCafeteria,
  		descripcion: 	    req.body.descripcion,
      direccion:        req.body.direccion,
  		logo_url:          'http://res.cloudinary.com/evileumas/image/upload/v1446208401/platillo-vacio_v3uxxi.jpg'
  	});

      cloudinary.uploader.upload(req.file.path, function(result) { 
      //console.log(result);
      info.logo_url = result.url;
      info.save(function(err) {
          if(!err) {
            //console.log('Created');
            res.redirect('/agregarInfo#success');
          } else {
            //console.log('ERROR: ' );
            res.redirect('/agregarInfo#fail');
          }
        });
    });
    
  }

  exports.updateInfo = function(req, res, next) {
  	
    Info.findById(req.params.id, function(err, info) {      
      info.nombreCafeteria  = req.body.nombreCafeteria;
      info.descripcion   = req.body.descripcion;
      info.direccion  = req.body.direccion;
      //info.logo_url  = req.body.logo_url;
      
      info.save(function(err) {
        if(!err) {
          console.log('Se modifico la info');
           res.json(info);
        } else {
          res.json(null);
        }
      });
    });   
  };

  exports.findById = function(req, res, next) {
    Info.findById(req.params.id, function(err, info) {
      if(!err) {
        res.json(info);
      } else {
        res.send(null);
      }
    });
  };