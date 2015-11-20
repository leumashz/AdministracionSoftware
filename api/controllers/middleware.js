var mongoose  = require('mongoose');
var Usuario   = require('../models/usuario.js');
var secretoDeAmor = 'cesarislove';
var jwt         = require('jsonwebtoken');

exports.authenticate = function (req, res, next) {
	
	Usuario.findOne({
		email: req.body.email
	}).select('email password').exec(function(err,usuario){
		//console.log('entro a la funcion principal');
		if (err) throw err;

		if(!usuario){
			//console.log('usuario incorrecto');
			res.json({
				success: false,
				message: 'Error de inicio de sesion. Correo Invalido'
			});
		} else if (usuario) {
			//console.log('llego al else if');
			var passwordValido = usuario.comparePassword(req.body.password);
			if (!passwordValido) {

				res.json({
					success: false,
					message: 'Error de inicio de sesion. Password Incorrecto'
				});
			}
			else {
				//console.log('llego al ultimo else');
				var token = jwt.sign({
						email: usuario.email
					}, secretoDeAmor, {
						expiresInMinutes: 1440
				});
				//se devuelve el token 

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
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	if (token) {
		console.log('si hay token');
		jwt.verify(token, superSecret, function(err, decoded) {
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
		console.log('no hay token');
		return res.status(403).send({
			success: false,
			message: 'No hay token que decodificar'
		});
	}
	next();
};