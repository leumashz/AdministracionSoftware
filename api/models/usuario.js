var mongoose 	= require('mongoose');
var	Schema 		= mongoose.Schema;

var UsuarioSchema = new mongoose.Schema({
	nombre: 		String,
	email: 			{ type: String, required: true, index: { unique: true }}, 
	password: 		{ type: String, required: true, select: false },
	tipo: 			Number,
	telefono:       String, 
	fecha: 			{type: Date, default: Date.now},
	token: 			String
});


module.exports = mongoose.model('Usuario', UsuarioSchema);
		