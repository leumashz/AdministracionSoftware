var mongoose 	= require('mongoose');
var	Schema 		= mongoose.Schema;
var Usuario 	= mongoose.model('Usuario');
var Platillo 	= mongoose.model('Platillo');

var ordenSchema = new Schema({
		estado: 		Number,
		id_usuario: 	String,
		platillos: 		[Platillo],
		fecha: 			{type: Date, default: Date.now},
		total: 			Number,
		tipo:       	Number,
		descripcion:   	String,
		llevar: 		Boolean
});


module.exports = mongoose.model('Orden', ordenSchema);

//datos no necesarios
//fecha