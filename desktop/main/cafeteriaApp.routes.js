angular.module('cafeteriaApp.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    

	$routeProvider
        .when('/registro',{
            templateUrl : 'main/views/pages/inicio.html'        
        })
        .when('/', {
            templateUrl : 'main/views/pages/inicio.html',
            controller  : 'mainController',
        })
        .when('/home', {
            templateUrl : 'main/views/pages/home.html',
            controller  : 'homeController', 
        })
        .when('/entrantes', {
            templateUrl : 'main/views/pages/entrantes.html'
        })
        .when('/verMenu', {
            templateUrl : 'main/views/pages/menu.html',
            controller  : 'menuController',
        })
        .when('/agregarPlatillo', {
            templateUrl : 'main/views/pages/agregarPlatillo.html'
        })
        .when('/editarPlatillo/:id', {
            templateUrl : 'main/views/pages/editarPlatillo.html',
            controller  : 'platilloEditController',
        })
        .when('/verOrdenes', {
            templateUrl : 'main/views/pages/ordenes.html',
            controller  : 'ordenController',
           
        })
        .when('/agregarOrden', {
            templateUrl : 'main/views/pages/agregarOrden.html',
            controller  : 'ordenCreateController',
            
        })
        .when('/editarOrden', {
            templateUrl : 'main/views/pages/editarOrden.html',
            controller  : 'ordenEditController',
          
        })
       
        .when('/info', {
            templateUrl : 'main/views/pages/informacion.html'
           
        })
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);

});