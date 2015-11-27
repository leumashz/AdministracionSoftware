var bodyParser = require('body-parser'); 
var mongoose  = require('mongoose');
var Usuario   = require('../models/usuario.js');
var secretaClave = 'cesarislove';
var jwt         = require('jsonwebtoken');

exports.authenticate = function (req, res) {
	
	Usuario.findOne({
		email: req.body.email
	}).select('nombre email password tipo telefono fecha direccion admin id').exec(function(err,usuario){
		if (err) throw err;
		if(!usuario){
			res.json({
				success: false,
				message: 'Error de inicio de sesion. Correo Invalido'
			});
		} else if (usuario) {
			var passwordValido = usuario.comparePassword(req.body.password);
			if (!passwordValido) {
				res.json({
					success: false,
					message: 'Error de inicio de sesion. Password Incorrecto'
				});
			}
			else {
//s				console.log(usuario);
				var nombre, admin, telefono, direccion, fecha, id;
				
				var token = jwt.sign({
						email: usuario.email,
						nombre: usuario.nombre,
						admin: usuario.admin,
						telefono: usuario.telefono,
						direccion: usuario.direccion,
						fecha: usuario.fecha,
						id: id
					}, secretaClave, {
						expiresInMinutes: 1440

				});
				res.json({
					success: true,
					message: 'Token generado',
					token: token
				});
			}
		}
	});
};

exports.verifyToken = function(req, res, next){
	var token = req.body.token || req.params.token || req.headers['x-access-token'];

	if (token) {
		jwt.verify(token, secretaClave, function(err, decoded) {
			if(err) {
				
				return res.status(403).send({
					success: false,
					message: 'Error al autenticar token'
				});
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		return res.status(403).send({
			success: false,
			message: 'No hay token que decodificar'
		});
	}
};