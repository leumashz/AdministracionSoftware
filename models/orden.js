exports = module.exports = function(app, mongoose) {

	var ordenSchema = new mongoose.Schema({
		estado: 	{ type: Number },
		id_usuario:{ type: String },
		//platillos: 	{ type: Number },debe ser un arreglo
		rating: 	{ type: Number },
		tipo:       { type: Number }   
	});

	mongoose.model('Orden', ordenSchema);
};
