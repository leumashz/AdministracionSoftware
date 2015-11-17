var app = angular.module('CafeteriaApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'js/pages/home.html'
            //controller  : 'mainController'
        })
        .when('/entrantes', {
            templateUrl : 'js/pages/entrantes.html'
        })
        .when('/verMenu', {
            templateUrl : 'js/pages/menu.html',
            controller  : 'menuController',
        })
        .when('/agregarPlatillo', {
            templateUrl : 'js/pages/agregarPlatillo.html',
            controller  : 'addPlatilloController',
        })
        .when('/editarPlatillo/:id', {
            templateUrl : 'js/pages/editarPlatillo.html',
            controller  : 'editPlatilloController',
        })
        .when('/vOrdenes', {
            templateUrl : 'js/pages/ordenes.html',
            controller  : 'ordenController',
        })
        .when('/agregarOrden', {
            templateUrl : 'js/pages/agregarOrden.html',
            controller  : 'ordenController',
        })
        .when('/editarOrden', {
            templateUrl : 'js/pages/editarOrden.html',
            controller  : 'ordenController',
        })
        .when('/verOrdenes', {
            templateUrl : 'js/pages/verOrdenes.html',
            controller  : 'ordenController',
        })
        .when('/info', {
            templateUrl : 'js/pages/informacion.html',
            controller  : 'infoController',
        })
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
});