//importando modelos
var Platillo = require ('./models/platillo');
var Usuario  = require ('./models/usuario');
var Orden 	 = require ('./models/orden');
//importando controladores
var pCtrl 	= require ('./controllers/platillos');
var oCtrl 	= require ('./controllers/ordenes');
var uCtrl 	= require ('./controllers/usuarios');


module.exports = function(apiRoutes) {
	//rutas para manejar platillos
	apiRoutes.route('/menu')
		.get(pCtrl.findMenu);

	apiRoutes.route('/platillo')
		.post(pCtrl.addPlatillo);

	apiRoutes.route('/platillo/:id')
		.get(pCtrl.findById)
		.put(pCtrl.updatePlatillo)
		.delete(pCtrl.deletePlatillo)

	//rutas para manejar ordenes
	apiRoutes.route('/ordenes')
		.get(oCtrl.findAllOrdenes);

	apiRoutes.route('/orden')
		.post(oCtrl.addOrden);

	apiRoutes.route('/orden/:id')
		.get(oCtrl.findById)
		.put(oCtrl.updateOrden)
		.delete(oCtrl.deleteOrden)
	//rutas para manejar usuarios
	apiRoutes.route('/usuarios')
		.get(uCtrl.findAllUsuarios);

	apiRoutes.route('/usuario')
		.post(uCtrl.addUsuario);

	apiRoutes.route('/usuario/:id')
		.get(uCtrl.findById)
		.put(uCtrl.updateUsuario)
		.delete(uCtrl.deleteUsuario);

	return apiRoutes;
};