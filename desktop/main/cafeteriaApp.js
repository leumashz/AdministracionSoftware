angular.module('cafeteriaApp', ['cafeteriaApp.routes','mainCtrl', 'menuCtrl', 'ordenCtrl', 'usuarioCtrl','infoCtrl','authService','menuService','ordenService','usuarioService','infoService'])

.config(function($httpProvider) {
	//el token debe ir en cade peticion 
	$httpProvider.interceptors.push('AuthInterceptor');
});
