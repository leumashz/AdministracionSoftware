var mongoose 	= require('mongoose');
var	Schema 		= mongoose.Schema;
var Usuario 	= mongoose.model('Usuario');
var Platillo 	= mongoose.model('Platillo');

var ordenSchema = new Schema({
		estado: 		String,
		id_usuario: 	String, //obtener campo _id del usuario
		platillos: 		[{ platillo_id: String, cantidad: Number }],
		fecha: 			{type: Date, default: Date.now},
		total: 			Number,
		tipo:       	Number,
		descripcion:   	[String],
		llevar: 		Boolean
});


module.exports = mongoose.model('Orden', ordenSchema);

