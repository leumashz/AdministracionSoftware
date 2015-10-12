exports = module.exports = function(app, mongoose) {

	var platilloSchema = new mongoose.Schema({
		nombre: 	{ type: String },
		descripcion:{ type: String },
		precio: 	{ type: Number },
		url-img:  	{ type: String },
		rating: 	{ type: Number },
		tipo:       { type: Number }   
	});
	
	mongoose.model('Platillo', platilloSchema);
};