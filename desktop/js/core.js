var app = angular.module('CafeteriaApp', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'js/pages/home.html'
            //controller  : 'mainController'
        })
        .when('/otro', {
            templateUrl : 'js/pages/otro.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});