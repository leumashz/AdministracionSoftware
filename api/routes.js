//var bodyParser = require('body-parser'); 
//var multer = require('multer');

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
var tkn = require ('./controllers/middleware');


module.exports = function(app, express) {
	
	var apiRoutes = express.Router();
	
	apiRoutes.get('/',function(req,res,next){
			res.json({message: 'Estas en la api (° ͜ʖ°)'});
	});

	apiRoutes.post('/usuario',uCtrl.addUsuario);

	apiRoutes.post('/platillo',pCtrl.addPlatillo);

	apiRoutes.post('/authenticate',tkn.authenticate);

	apiRoutes.get('/info',iCtrl.findInfo);

	apiRoutes.use(tkn.verifyToken);

	apiRoutes.get('/menu',pCtrl.findMenu);


	apiRoutes.route('/platillo/:id')
		.get(pCtrl.findById)
		.put(pCtrl.updatePlatillo)
		.delete(pCtrl.deletePlatillo)


	//rutas para manejar ordenes
	apiRoutes.get('/ordenes',oCtrl.findAllOrdenes);

	apiRoutes.post('/orden',oCtrl.addOrden);

	apiRoutes.route('/orden/:id')
		.get(oCtrl.findById)
		.put(oCtrl.updateOrden)
		.delete(oCtrl.deleteOrden)
	
	//rutas para manejar usuarios
	apiRoutes.get('/usuarios',uCtrl.findAllUsuarios);

	apiRoutes.route('/usuario/:id')
		.get(uCtrl.findById)
		.put(uCtrl.updateUsuario)
		.delete(uCtrl.deleteUsuario);
	
	apiRoutes.route('/usuario/:email')
		.get(uCtrl.findbyEmail);
	
	//rutas para manejar sugerencias
	apiRoutes.get('/sugerencias',sCtrl.findAllSugerencias);

	apiRoutes.post('/sugerencia',sCtrl.addSugerencia);
	apiRoutes.route('/sugerencia/:id')
		.get(sCtrl.findById)
		.put(sCtrl.updateSugerencia)
		.delete(sCtrl.deleteSugerencia);

	//info de la cafeteria
	apiRoutes.post('/info',iCtrl.addInfo);

	apiRoutes.route('/info/:id')
		.get(iCtrl.findById)	
		.put(iCtrl.updateInfo);

	//obtener info del usuario logeado
	apiRoutes.get('/usuarioOn', function(req,res){
		return res.send(req.decoded);
	});

	
	return apiRoutes;
};


/*

{
    "nombre":"samuel2",
    "email":"samuel2@gmail.com",
    "password":"holamundo",
    "tipo":1,
    "telefono":"6161155593",
    "direccion":"calle A numero 1313",
    "admin":true
    
}
*/