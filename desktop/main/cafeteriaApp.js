angular.module('cafeteriaApp', ['cafeteriaApp.routes','mainCtrl', 'menuCtrl', 'authService','menuService','ordenService'])

.config(function($httpProvider) {
	//el token debe ir en cade peticion 
	$httpProvider.interceptors.push('AuthInterceptor');
});
