var mongoose 	= require('mongoose');
var	Schema 		= mongoose.Schema;

var platilloSchema = new mongoose.Schema({
	nombre: 		String,
	descripcion:  	String,
	precio: 		Number,
	url_img: 		String,
	rating: 		Number,
	tipo:       	Number    
});


module.exports = mongoose.model('Platillo', platilloSchema);