angular
  .module('ionicApp')
  .controller('menuCtrl',MenuCtrl);


  function MenuCtrl ($scope,menuService) {
    menuService.getMenu().then(function(menu){
  		$scope.menu = menu;
  	});
  }
