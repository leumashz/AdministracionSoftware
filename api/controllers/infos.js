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
      nombre:       req.body.nombre,
  		descripcion: 	req.body.descripcion,
      direccion:    req.body.direccion,
  		url:          req.body.url,
      telefono:     req.body.telefono,
      pagina:       req.body.pagina
  	});

      /*cloudinary.uploader.upload(req.file.path, function(result) { 
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
    });*/
    info.save(function(err) {
          if(!err) {
            //console.log('Created');
            res.json({message: 'Informacion agregada con exito'});
          } else {
            //console.log('ERROR: ' );
            res.json({message: 'Error al agregar la informacion'});
          }
        });
  };

  exports.updateInfo = function(req, res, next) {
  	
    Info.findById(req.params.id, function(err, info) {      
      info.nombreCafeteria  = req.body.nombreCafeteria;
      info.descripcion   = req.body.descripcion;
      info.direccion  = req.body.direccion;
      //info.logo_url  = req.body.logo_url;
      
      info.save(function(err) {
        if(!err) {
            //console.log('Se modifico la info');
           res.json({message: 'Se modifico la informacion'});
        } else {
          res.json({message: 'Error al editar la informacion'});
          //res.json(null);
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