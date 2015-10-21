angular.module('ionicApp', ['ionic', 'controllers', 'services'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('register',{
    url:'/register',
    templateUrl: 'templates/register.html'
  })
  .state('recover',{
    url:'/recover',
    templateUrl: 'templates/recover.html'
  })
  .state('platillos',{
    url:'/platillos',
    templateUrl: 'templates/platillos.html',
    controller: 'PlatillosCtrl'
  });

  $urlRouterProvider.otherwise("/platillos");

});
