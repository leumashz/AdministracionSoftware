var mongoose 	= require('mongoose');
var	Schema 		= mongoose.Schema;

var UsuarioSchema = new mongoose.Schema({
	nombre: 		String,
	email: 			String,
	tipo: 			Number,
	telefono:       String, 
	fecha: 			{type: Date, default: Date.now} 
});


module.exports = mongoose.model('Usuario', UsuarioSchema);
		