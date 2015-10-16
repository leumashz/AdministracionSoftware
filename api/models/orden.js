var mongoose 	= require('mongoose');
var	Schema 		= mongoose.Schema;
var Usuario 	= mongoose.model('Usuario');
var Platillo 	= mongoose.model('Platillo');

var ordenSchema = new Schema({
		estado: 	Number,
		id_usuario: {type: Schema.ObjectId, ref: "Usuario" } ,
		platillos: 	[Platillo],
		fecha: 		Date.now,
		total: 		Number,
		tipo:       Number   
});


module.exports = mongoose.model('Orden', ordenSchema);

