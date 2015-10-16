var Orden = require('../models/orden.js');

  
  exports.findAllOrdenes = function(req, res) {
    Orden.find(function(err, ordenes) {
      if(!err) {
        console.log('GET /ordenes')
        res.json(ordenes);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  exports.findById = function(req, res) {
    Orden.findById(req.params.id, function(err, orden) {
      if(!err) {
        console.log('GET /orden/' + req.params.id);
        res.json(orden);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  exports.addOrden = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var orden = new Orden({
      estado:         req.body.estado,
      id_usuario:     req.body.id_usuario,
      platillos:      req.body.platillos,
      fecha:          req.body.fecha,
      total:          req.body.total,
      tipo:           req.body.tipo,
    });

    orden.save(function(err) {
      if(!err) {
        console.log('Orden creada');
      } else {
        console.log('ERROR: ' + err);
      }
    });

    res.json(orden);
  };

  exports.updateOrden = function(req, res) {
    Orden.findById(req.params.id, function(err, orden) {
      orden.estado =         req.body.estado,
      orden.id_usuario=     req.body.id_usuario,
      orden.platillos=      req.body.platillos,
      orden.fecha=           req.body.fecha,
      orden.total=          req.body.total,
      orden.tipo=           req.body.tipo,

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

  
  exports.deleteOrden = function(req, res) {
    Orden.findById(req.params.id, function(err, orden) {
      orden.remove(function(err) {
        if(!err) {
          console.log('Orden Eliminada');
        } else {
          console.log('ERROR: ' + err);
          //res.send(null);
        }
      })
    });
  }

  