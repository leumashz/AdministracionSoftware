var mongoose 	= require('mongoose');
var	Schema 		= mongoose.Schema;
var bcrypt 		= require('bcrypt-nodejs');

var UsuarioSchema = new mongoose.Schema({
	nombre: 		String,
	email: 			{ type: String, required: true, index: { unique: true }}, 
	password: 		{ type: String, required: true, select: false },
	tipo: 			Number,
	telefono:       String, 
	fecha: 			{ type: Date, default: Date.now},
	admin:  		{ type: Boolean, default: false},
	token: 			String
});

//se encripta el password antes de guardarse
UsuarioSchema.pre('save', function(next) {
	var usuario = this; 

	if(!usuario.isModified('password')) return next();

	bcrypt.hash(usuario.password, null, null,function(err, hash) {
		if (err) return next(err);

		usuario.password = hash;
		next();
	});
});

//metodo para comparar password con el hash en la base de datos
UsuarioSchema.methods.comparePassword = function (password) {
	var usuario = this;

	return bcrypt.compareSync(password, usuario.password);
}

module.exports = mongoose.model('Usuario', UsuarioSchema);
		