var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var InfoSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    direccion: String,
    url: String,
    telefono: Number
});

module.exports = mongoose.model('Info', InfoSchema);