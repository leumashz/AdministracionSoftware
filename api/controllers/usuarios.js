var mongoose  = require('mongoose');
var Usuario = require('../models/usuario.js');
var  bodyParser = require('body-parser'); 
  
  exports.findAllUsuarios = function(req, res, next) {
    Usuario.find(function(err, usuarios) {
      if(!err) {
        //console.log('GET /usuarios')
        res.json(usuarios);
      } else {
        //console.log('ERROR: ' + err);
        res.json({message: 'error al obtener usuarios'});
      }
    });
  };

  //GET - regresa un usuario por id
  exports.findById = function(req, res, next) {
    Usuario.findById(req.params.id, function(err, usuario) {
      if(!err) {
        res.json(usuario);
      } else {
        console.log('ERROR: ' + err);
        res.json({mensaje: 'No se encontro el usuario'});
      }
    });
  };

  
  exports.addUsuario = function(req, res, next) {
    console.log('POST');
    console.log(req.body);

    var usuario = new Usuario({
      nombre:   req.body.nombre,
      email:    req.body.email,
      password: req.body.password,
      tipo:     req.body.tipo,
      telefono: req.body.telefono,
      direccion:req.body.direccion,
      admin:    req.body.admin
    });

    usuario.save(function(err) {
      if(!err) {
        //console.log('usuario creado');
        res.json(usuario);
      } else {
        //console.log('ERROR: ' + err);
      }
    });
  };

  exports.updateUsuario = function(req, res, next) {
    Usuario.findById(req.params.id, function(err, usuario) {
      if(req.body.nombre) usuario.nombre    = req.body.nombre;
      if(req.body.email) usuario.email      = req.body.email;
      if(req.body.password) usuario.password  = req.body.password; 
      if(req.body.telefono) usuario.telefono  = req.body.telefono;
      if(req.body.direccion) usuario.direccion = req.body.direccion;

      usuario.save(function(err) {
        if(!err) {
          //console.log('Updated');
          res.json({ message: 'Usuario actualizado' });
        } else {
          //console.log('ERROR: ' + err);
          res.json({ message: 'Error al intentar actualizar los datos'});
        }
      });
    });
  }

  /*exports.deleteUsuario = function(req, res, next) {
    Usuario.findById(req.params.id, function(err, usuario) {
      usuario.remove(function(err) {
        if(!err) {
          //console.log('Usuario Eliminado');
          res.json({message: 'Usuario eliminado exitosamente'});
        } else {
          //console.log('ERROR: ' + err);          
          res.json({message: 'Error al intentar eliminar el usuario'});
        }
      })
    });
  }*/

  exports.deleteUsuario = function(req, res) {
  Usuario.remove({
    _id: req.params.id
  }, function(err, usuario){
    if(err) res.send(err);
    
    res.json({message: 'usuario eliminado'});   
  });
}