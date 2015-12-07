angular.module('cafeteriaApp', ['cafeteriaApp.routes','mainCtrl', 'menuCtrl', 'ordenCtrl', 'usuarioCtrl', 'sugerenciaCtrl','infoCtrl','authService','menuService','ordenService','usuarioService','sugerenciaService','infoService'])

.config(function($httpProvider) {
	//el token debe ir en cade peticion 
	$httpProvider.interceptors.push('AuthInterceptor');
});
