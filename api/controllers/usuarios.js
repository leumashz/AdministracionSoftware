var Usuario = require('../models/usuario.js');

  
  exports.findAllUsuarios = function(req, res, next) {
    Usuario.find(function(err, usuarios) {
      if(!err) {
        console.log('GET /usuarios')
        res.json(usuarios);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  //GET - regresa un usuario por id
  exports.findById = function(req, res, next) {
    Usuario.findById(req.params.id, function(err, usuario) {
      if(!err) {
        console.log('GET /usuario/' + req.params.id);
        res.json(usuario);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  
  exports.addUsuario = function(req, res, next) {
    console.log('POST');
    console.log(req.body);

    var usuario = new Usuario({
      nombre:   req.body.nombre,
      email:    req.body.email,
      tipo:     req.body.tipo,
      telefono: req.body.telefono,
      fecha:    req.body.fecha
    });

    usuario.save(function(err) {
      if(!err) {
        console.log('usuario creado');
      } else {
        console.log('ERROR: ' + err);
      }
    });

    res.json(usuario);
  };

  exports.updateUsuario = function(req, res, next) {
    Usuario.findById(req.params.id, function(err, usuario) {
      usuario.nombre    = req.body.nombre;
      usuario.mail      = req.body.mail;
      usuario.tipo      = req.body.tipo;
      usuario.telefono  = req.body.tipo;
      usuario.fecha     = req.body.fecha;

      usuario.save(function(err) {
        if(!err) {
          console.log('Updated');
        } else {
          console.log('ERROR: ' + err);
        }
        res.json(usuario);
      });
    });
  }

  exports.deleteUsuario = function(req, res, next) {
    Usuario.findById(req.params.id, function(err, usuario) {
      usuario.remove(function(err) {
        if(!err) {
          console.log('Usuario Eliminado');
          res.send(null);
        } else {
          console.log('ERROR: ' + err);          
          res.send(null);
        }
      })
    });
  }

  