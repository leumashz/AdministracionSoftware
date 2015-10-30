angular
  .module('ionicApp')
  .controller('menuCtrl',MenuCtrl);


  function MenuCtrl ($scope,menuService) {
    $scope.$on('$ionicView.beforeEnter',function () {
      menuService.getMenu().then(function(menu){
        $scope.menu = menu;
      });
    });
  }
