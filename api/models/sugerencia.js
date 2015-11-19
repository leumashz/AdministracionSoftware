var mongoose 	= require('mongoose');
var	Schema 		= mongoose.Schema;
var Usuario 	= mongoose.model('Usuario');

var sugerenciaSchema = new Schema({
		id_usuario: 	String, 
		fecha: 			{type: Date, default: Date.now},
		titulo: 		String,
		comentario:   	String,
});


module.exports = mongoose.model('Sugerencia', sugerenciaSchema);
