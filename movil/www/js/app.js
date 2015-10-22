angular.module('ionicApp', ['ionic', 'controllers', 'services','directives'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })
  .state('register',{
    url:'/register',
    templateUrl: 'templates/register.html'
  })
  .state('recover',{
    url:'/recover',
    templateUrl: 'templates/recover.html'
  })
  .state('menu',{
    url:'/menu',
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  })
  .state('platillo',{
    url: '/menu/:idPlatillo',
    templateUrl: 'templates/platillo.html',
    controller : 'PlatilloCtrl'
  });

  $urlRouterProvider.otherwise("/menu");

});
