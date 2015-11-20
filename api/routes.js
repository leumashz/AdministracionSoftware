//importando modelos
var Platillo 	= require ('./models/platillo');
var Usuario  	= require ('./models/usuario');
var Orden 	 	= require ('./models/orden');
var Sugerencia 	= require ('./models/orden');
var Info		= require ('./models/info');
 
//importando controladores
var pCtrl 	= require ('./controllers/platillos');
var oCtrl 	= require ('./controllers/ordenes');
var uCtrl 	= require ('./controllers/usuarios');
var sCtrl 	= require ('./controllers/sugerencias');
var iCtrl 	= require ('./controllers/infos');
var authTkn = require ('./controllers/middleware');


module.exports = function(apiRoutes) {
	//rutas para manejar platillos
	apiRoutes.route('/')
		.get(function(req,res,next){
			res.json({message: 'Estas en la api (° ͜ʖ°)'});
		});

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

	//rutas para manejar sugerencias
	apiRoutes.route('/sugerencias')
		.get(sCtrl.findAllSugerencias);

	apiRoutes.route('/sugerencia')
		.post(sCtrl.addSugerencia);

	apiRoutes.route('/sugerencia/:id')
		.get(sCtrl.findById)
		.put(sCtrl.updateSugerencia)
		.delete(sCtrl.deleteSugerencia);

	//info de la cafeteria
	apiRoutes.route('/info')
		.get(iCtrl.findInfo)
		.post(iCtrl.addInfo);

	apiRoutes.route('/info/:id')
		.get(iCtrl.findById)	
		.put(iCtrl.updateInfo);

	apiRoutes.route('/authenticate')
		.post(authTkn.authenticate);

	//obtener info del usuario logeado
	apiRoutes.route('/usuarioOn')
		.get(function(req,res,next){
			res.send(req.decoded);
		});

	apiRoutes.use(authTkn.verifyToken);
	return apiRoutes;
};


/*

{
    "nombre":"samuel2",
    "email":"samuel2@gmail.com",
    "password":"holamundo",
    "tipo":1,
    "telefono":"6161155593",
    "admin":true
    
}
*/