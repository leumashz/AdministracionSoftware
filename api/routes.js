//importando modelos
var Persona = require ('./models/platillo');
var Usuario = require ('./models/usuario');
var Orden 	= require ('./models/orden');
//importando controladores
var pCtrl 	= require ('./controllers/platillos');
var oCtrl 	= require ('./controllers/ordenes');
var uCtrl 	= require ('./controllers/usuarios');

module.exports = function(app) {
	//platillo
	app.get('/platillos', pCtrl.findAllPlatillos);
	app.get('/platillo/:id', pCtrl.findById);
	app.post('/platillo', pCtrl.addPlatillo);
	app.put('/platillo/:id', pCtrl.updatePlatillo);	
	app.delete('/platillo/:id', pCtrl.deletePlatillo );
	//usuario
	app.get('/usuarios', uCtrl.findAllUsuarios);
	app.get('/usuarios/:id', uCtrl.findById);
	app.post('/usuario', uCtrl.addUsuario);
	app.put('/usuario/:id', uCtrl.updateUsuario);	
	app.delete('/usuario/:id', uCtrl.deleteUsuario);
	//orden
	app.get('/ordenes', oCtrl.findAllOrdenes);
	app.get('/orden/:id', oCtrl.findById);
	app.post('/orden', oCtrl.addOrden);
	app.put('/orden/:id', oCtrl.updateOrden);	
	app.delete('/orden/:id', oCtrl.deleteOrden );
	//panel hecho en angular para manejar la aplicacion
	/*app.get('*', function(req, res) {
		res.sendfile('./angular/index.html');
	});*/
};