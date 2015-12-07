var mongoose  = require('mongoose');
var Orden = require('../models/orden.js');


  exports.findAllOrdenes = function(req, res, next) {
    Orden.find(function(err, ordenes) {
      if(!err) {
        console.log('GET /ordenes')
        res.json(ordenes);
      } else {
        console.log('ERROR: ' + err);
        res.send(null);
      }
    });
  };

  exports.findById = function(req, res, next) {
    Orden.findById(req.params.id, function(err, orden) {
      if(!err) {
        console.log('GET /orden/' + req.params.id);
        res.json(orden);
      } else {
        console.log('ERROR: ' + err);
        res.send(null);
      }
    });
  };

  exports.addOrden = function(req, res, next) {
    console.log(req.body);
    //console.log(req.body);

    var orden = new Orden({
      estado:         req.body.estado,
      id_usuario:     req.body.id_usuario,
      platillos:      req.body.platillos,
      fecha:          req.body.fecha,
      total:          req.body.total,
      tipo:           req.body.tipo,
      descripcion:    req.body.descripcion,
      llevar:         req.body.llevar
    });

    orden.save(function(err) {
      if(!err) {
        console.log('Orden creada');
        res.send(null);
      } else {
        console.log('ERROR: ' + err);
        res.send(null);
      }
    });

    //res.json(orden);
  };

  exports.updateOrden = function(req, res, next) {
    Orden.findById(req.params.id, function(err, orden) {
      if(req.body.estado) orden.estado      =    req.body.estado;
      if(req.body.id_usuario) orden.id_usuario  =    req.body.id_usuario;
      if(req.body.platillos) orden.platillos   =    req.body.platillos;
      if(req.body.fecha) orden.fecha       =    req.body.fecha;
      if(req.body.total) orden.total       =    req.body.total;
      if(req.body.tipo) orden.tipo        =    req.body.tipo;
      if(req.body.descripcion) orden.descripcion       =    req.body.descripcion;
      if(req.body.llevar) orden.llevar       =    req.body.llevar;

      orden.save(function(err) {
        if(!err) {
          console.log('orden actualizada');
        } else {
          console.log('ERROR: ' + err);
        }
        res.json(orden);
      });
    });
  }


  exports.deleteOrden = function(req, res, next) {
    Orden.findById(req.params.id, function(err, orden) {
      orden.remove(function(err) {
        if(!err) {
          console.log('Orden Eliminada');
          res.send(null);
        } else {
          console.log('ERROR: ' + err);
          res.send(null);
        }
      })
    });
  }
