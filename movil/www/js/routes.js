angular
  .module('ionicApp')
  .config(config);

function config($stateProvider, $urlRouterProvider) {

    $stateProvider
  /////////Tabs/
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
      })
  ///////////Vistas//////////////////////
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

    .state('tab.menu',{
      url:'/menu',
      views: {
        'tab-menu': {
          templateUrl: 'templates/menu.html',
          controller: 'MenuCtrl'
        }
      }

    })

    .state('tab.carrito',{
       cache: false,
      url:'/carrito',
      views: {
        'tab-carrito': {
          templateUrl: 'templates/carrito.html',
          controller: 'CarritoCtrl'
        }
      }

    })

    .state('tab.platillo',{
      url: '/menu/:idPlatillo',
        views: {
          'tab-menu' : {
            templateUrl: 'templates/platillo.html',
            controller : 'PlatilloCtrl'
          }
        }

    });

    $urlRouterProvider.otherwise("/tab/menu");
}
